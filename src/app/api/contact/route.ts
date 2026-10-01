import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, topic, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const targetEmail = "rahul7926963@gmail.com";
    let dispatched = false;
    let methodUsed = "none";

    // Method 1: Nodemailer via Gmail SMTP (if credentials exist)
    const emailUser = process.env.EMAIL_USER || process.env.email_from || targetEmail;
    const emailPass = process.env.EMAIL_PASSWORD || process.env.email_password || process.env.GMAIL_APP_PASSWORD;

    if (emailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: emailUser,
            pass: emailPass,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact - stayrahul" <${emailUser}>`,
          to: targetEmail,
          replyTo: email,
          subject: `🚀 [stayrahul Portfolio] ${topic ? `[${topic}] ` : ""}from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic || "General"}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #0b1120; color: #f8fafc;">
              <div style="border-bottom: 1px solid #1e293b; padding-bottom: 16px; margin-bottom: 20px;">
                <h2 style="color: #38bdf8; margin: 0 0 4px 0; font-size: 20px;">New Message from stayrahul Portfolio</h2>
                <span style="font-size: 12px; color: #94a3b8; font-family: monospace;">Signal Origin: stayrahul.vercel.app</span>
              </div>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; color: #94a3b8; width: 90px; font-weight: 600;">Sender:</td>
                  <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">Email:</td>
                  <td style="padding: 8px 0; color: #38bdf8;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">Topic:</td>
                  <td style="padding: 8px 0; color: #c084fc;">${topic || "General Discussion"}</td>
                </tr>
              </table>
              <div style="background-color: #050a14; border: 1px solid #1e293b; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
                <p style="margin: 0; color: #e2e8f0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
              <div style="font-size: 11px; color: #64748b; border-top: 1px solid #1e293b; padding-top: 12px;">
                Tip: You can hit &quot;Reply&quot; directly in Gmail to respond back to ${email}.
              </div>
            </div>
          `,
        });

        dispatched = true;
        methodUsed = "nodemailer_gmail";
      } catch (nmErr) {
        console.warn("Nodemailer dispatch failed, attempting secondary dispatch:", nmErr);
      }
    }

    // Method 2: FormSubmit AJAX endpoint (Guaranteed delivery straight to Gmail)
    if (!dispatched) {
      try {
        const formSubmitRes = await fetch("https://formsubmit.co/ajax/rahul7926963@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            _replyto: email,
            _subject: `🚀 [stayrahul Portfolio] ${topic ? `[${topic}] ` : ""}from ${name}`,
            topic: topic || "General Inquiry",
            message,
            _template: "table",
          }),
        });

        if (formSubmitRes.ok) {
          dispatched = true;
          methodUsed = "formsubmit_gmail";
        }
      } catch (fsErr) {
        console.warn("FormSubmit dispatch error:", fsErr);
      }
    }

    if (dispatched) {
      return NextResponse.json({
        success: true,
        message: "Message dispatched directly to Rahul's Gmail.",
        method: methodUsed,
      });
    }

    // If both failed (e.g. offline during local dev without internet)
    return NextResponse.json(
      {
        success: false,
        error: "Direct transmission failed. Please use direct email to rahul7926963@gmail.com.",
      },
      { status: 500 }
    );
  } catch (error: unknown) {
    console.error("Contact API general failure:", error);
    const message = error instanceof Error ? error.message : "Internal server error occurred.";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
