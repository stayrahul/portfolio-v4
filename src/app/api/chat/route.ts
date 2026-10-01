import { streamText } from "ai";
import { google } from "@ai-sdk/google";
import { getAIPromptContext } from "@/data/promptData";
import { selfData, projectsData, faqsData } from "@/data/portfolioData";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "Invalid request payload" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const systemPrompt = getAIPromptContext();

    // Check if API key is present
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (apiKey) {
      try {
        const result = streamText({
          model: google("gemini-2.5-flash"),
          system: systemPrompt,
          messages: messages.map((m: { role: "user" | "assistant" | "system"; content: string }) => ({
            role: m.role === "assistant" ? "assistant" : "user",
            content: m.content,
          })),
          temperature: 0.7,
        });

        return result.toTextStreamResponse();
      } catch (geminiError) {
        console.warn("Gemini stream error, switching to built-in local knowledge engine:", geminiError);
      }
    }

    // Comprehensive Fallback Knowledge Engine (Answering EVERYTHING about Rahul Kushwaha / stayrahul)
    const lastUserMsg = messages.filter((m: { role: string }) => m.role === "user").pop();
    const query = (lastUserMsg?.content || "").toLowerCase().trim();

    let reply = "";

    // 1. Who is stayrahul / Rahul Kushwaha
    if (
      query.includes("who is") ||
      query.includes("stayrahul") ||
      query.includes("about rahul") ||
      query.includes("introduce") ||
      query.includes("bio")
    ) {
      reply = `**Rahul Kushwaha** (widely known across GitHub & Twitter as **@${selfData.handle}**) is an innovative full-stack developer, UI/UX craftsman, and creative vibe coder based in Nepal.

• **Current Academic Track**: Pursuing BCSIT at [Quest International College](https://quest.edu.np/) (Gwarko, Lalitpur).
• **Core Focus**: High-velocity web engineering, Next.js 16 architectures, reactive UI animations, and AI agent integration.
• **Shipped Works**: 11+ production web apps, commercial systems, and design portfolios.
• **Coordinates**: Gwarko, Lalitpur & Kathmandu, Nepal (Origin: Simraungadh, Bara / Hetauda).`;
    }

    // 2. Education & Colleges
    else if (
      query.includes("education") ||
      query.includes("college") ||
      query.includes("school") ||
      query.includes("quest") ||
      query.includes("ccrc") ||
      query.includes("adhunik") ||
      query.includes("study") ||
      query.includes("see") ||
      query.includes("degree") ||
      query.includes("bcsit") ||
      query.includes("+2") ||
      query.includes("class 11") ||
      query.includes("class 12")
    ) {
      reply = `Here is Rahul's complete verified academic record:

1. **BCSIT (Bachelor of Computer Science & Information Technology)**
   • **Institution**: [Quest International College](https://quest.edu.np/) (Gwarko, Lalitpur)
   • **Period**: 2026 — Present (Currently Pursuing Undergraduate)
   • **Affiliation**: Pokhara University
   • **Focus**: Software engineering, advanced data structures, DBMS, distributed cloud architectures.

2. **Class 11 & 12 — Science (+2 Science)**
   • **Institution**: [Capital College and Research Centre (CCRC)](https://ccrc.edu.np/) (Koteshwor / Kathmandu)
   • **Period**: 2024 — 2026 (Completed)
   • **Focus**: Computational logic, C/C++ programming, Physics, and Advanced Mathematics.

3. **Class 9 to Class 10 / SEE**
   • **Institution**: [Adhunik Rastriya Secondary School](https://schooladhunik.edu.np/) (Hetauda)
   • **Period**: Completed in 2024
   • **Foundations**: Discovered coding, digital systems, and computer applications.`;
    }

    // 3. Specific Project: Simraungadh App
    else if (query.includes("simraungadh app") || query.includes("simraungadh") || query.includes("ranivas")) {
      const p = projectsData.find((item) => item.id === 2);
      reply = `**${p?.title || "Simraungadh App"}**
• **Status**: Active Build / In Development (2026)
• **Overview**: ${p?.des}
• **Tech Stack**: Next.js, React Native, TypeScript, Tailwind CSS
• **Category**: Civic Tech & Smart Municipal Portal (Simraungadh, Bara, Nepal)
• **Features**: Historical monument & Ranivas temple exploration guides, local business trade directory, civic announcements, emergency services, and community grievance ticketing.
• **Demo & Source**: [${p?.link}](${p?.link}) | [GitHub](${p?.sourceCode})`;
    }

    // 4. Specific Project: Hostel Management App
    else if (query.includes("hostel") || query.includes("hostel management")) {
      const p = projectsData.find((item) => item.id === 3);
      reply = `**${p?.title || "Hostel Management App"}**
• **Status**: Active Build / In Development (2026)
• **Overview**: ${p?.des}
• **Tech Stack**: Next.js 16, TypeScript, Tailwind CSS, Node.js, Prisma
• **Features**: Visual bed & room allocation matrix, automated fee ledgers with receipt exports, daily mess meal attendance tracker, student leave passes, and warden admin panel.
• **Demo & Source**: [${p?.link}](${p?.link}) | [GitHub](${p?.sourceCode})`;
    }

    // 5. Specific Project: Face ID for Mac
    else if (query.includes("face id") || query.includes("mac face") || query.includes("biometric")) {
      const p = projectsData.find((item) => item.id === 4);
      reply = `**${p?.title || "Face ID for Mac"}**
• **Status**: Active Build / In Development (2026)
• **Overview**: ${p?.des}
• **Tech Stack**: Python, OpenCV, CoreML, Swift, Face Recognition API
• **Features**: On-device facial landmark embedding extraction via CoreML, instant hands-free Mac unlock (<350ms), app locker, intruder snapshot capture, and zero-cloud privacy.
• **Repository**: [GitHub Source Code](${p?.sourceCode})`;
    }

    // 6. Specific Project: PocketOps
    else if (query.includes("pocketops") || query.includes("pocket ops") || query.includes("devops telemetry")) {
      const p = projectsData.find((item) => item.id === 5);
      reply = `**${p?.title || "PocketOps"}**
• **Status**: Active Build / In Development (2026)
• **Overview**: ${p?.des}
• **Tech Stack**: Next.js, React, TypeScript, WebSockets, Docker API
• **Features**: Live WebSocket server telemetry (CPU, RAM, network I/O), Docker container start/stop/restart controls, uptime ping push alerts, and one-tap CI/CD webhook triggers on the go.
• **Demo & Source**: [${p?.link}](${p?.link}) | [GitHub](${p?.sourceCode})`;
    }

    // 7. Specific Project: Ice & Fire Cafe
    else if (query.includes("ice") || query.includes("cafe") || query.includes("fire")) {
      const p = projectsData.find((item) => item.id === 6);
      reply = `**${p?.title || "Ice & Fire Cafe"}**
• **Overview**: ${p?.des}
• **Tech Stack**: Next.js, Tailwind CSS, Framer Motion
• **Category**: Commercial Web Portal (Simraungadh, Bara)
• **Live Demo**: [${p?.link}](${p?.link})
• **Features**: Dynamic menu showcases, chef specials, table reservations, and mobile-first responsive design.`;
    }

    // 8. Specific Project: ChatBot AI
    else if (query.includes("chatbot") || query.includes("chat bot") || query.includes("ai assistant")) {
      const p = projectsData.find((item) => item.id === 7);
      reply = `**${p?.title || "ChatBot AI"}**
• **Overview**: ${p?.des}
• **Tech Stack**: Next.js, Gemini API, AI SDK, Tailwind CSS
• **Features**: Low-latency token streaming, context memory, and markdown rendering.
• **Live Demo**: [${p?.link}](${p?.link})`;
    }

    // 9. Specific Project: Octave Event
    else if (query.includes("octave") || query.includes("esport") || query.includes("gaming")) {
      const p = projectsData.find((item) => item.id === 8);
      reply = `**${p?.title || "Octave Event"}**
• **Overview**: ${p?.des}
• **Category**: Gaming & Esports Showcase
• **Live Demo**: [${p?.link}](${p?.link})
• **Features**: Cyberpunk dark styling, tournament bracket schedule, and live registration forms.`;
    }

    // 10. Specific Project: Portfolio v4 / Generations
    else if (query.includes("v4") || query.includes("portfolio 3") || query.includes("version")) {
      reply = `Rahul has iteratively created 4 major generations of his portfolio:
• **Portfolio v4 (Obsidian Cybernetic — Current)**: Next.js 16 Turbopack, 3D physics tilt cards, 2-in-a-row mobile cards, floatable Gemini AI assistant, and clean dedicated pages (/projects, /journey, /contact).
• **Portfolio 3.0**: Interactive developer hub with tabbed terminal and sound effects.
• **Portfolio 2.0**: Glassmorphic UI with vibrant ambient lighting.
• **Portfolio 1.0**: The genesis of Rahul's creative coding journey.`;
    }

    // 11. All Projects List
    else if (
      query.includes("project") ||
      query.includes("work") ||
      query.includes("apps") ||
      query.includes("built") ||
      query.includes("shipped") ||
      query.includes("portfolio") ||
      query.includes("active build")
    ) {
      const list = projectsData
        .map((p) => `• **${p.title}** (${p.year || "2026"}) [${p.status || "Shipped"}]: ${p.des} — [Demo](${p.link})`)
        .join("\n");
      reply = `Rahul has engineered **15+ complete projects** across active builds, commercial portals, AI systems, and design portfolios:

${list}

You can browse all 15+ interactive project specifications with source code links on the dedicated [/projects](/projects) page or click 'View All Projects' on the home page!`;
    }

    // 8. Tech Stack & Skills
    else if (
      query.includes("skill") ||
      query.includes("stack") ||
      query.includes("tech") ||
      query.includes("language") ||
      query.includes("framework") ||
      query.includes("tool")
    ) {
      reply = `Rahul's battle-tested technical arsenal includes:

• **Frontend Engineering**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, HTML5/CSS3.
• **Animation & Physics**: Framer Motion, 3D Tilt Matrix, Glassmorphism, Web Audio API synthesizers.
• **Backend & DB**: Node.js, Express.js, MongoDB, RESTful APIs, Next.js Server Actions.
• **AI & GenAI Integration**: Google Gemini 2.5 Flash, Vercel AI SDK, streamText, multimodal prompts.
• **Tooling & Workflow**: Git, GitHub, Turbopack, npm/npx, Puppeteer automated testing, Vercel deployment.`;
    }

    // 9. Vibe Coding
    else if (query.includes("vibe") || query.includes("why code") || query.includes("philosophy")) {
      reply = `**Vibe Coding** is Rahul's philosophy of creative engineering:
It represents building software purely for the joy and flow state of creating. Rather than getting bogged down by rigid dogma, vibe coding embraces high aesthetic sensibility, tactile micro-animations, glassmorphism, and rapid AI acceleration to ship fun, fluid, and memorable web experiences.`;
    }

    // 10. Contact, Email, Phone, Hire
    else if (
      query.includes("contact") ||
      query.includes("hire") ||
      query.includes("email") ||
      query.includes("phone") ||
      query.includes("whatsapp") ||
      query.includes("reach") ||
      query.includes("freelance") ||
      query.includes("message")
    ) {
      reply = `You can connect directly with Rahul anytime:

• **Email**: [${selfData.email}](mailto:${selfData.email})
• **Phone & WhatsApp**: [${selfData.phone}](https://wa.me/9779822228722)
• **Direct Contact Hub**: Check out the [/contact](/contact) page to send a message directly to Rahul's Gmail!
• **GitHub**: [github.com/stayrahul](https://github.com/stayrahul)
• **LinkedIn**: [linkedin.com/in/rahulkushwaha](https://linkedin.com/in/rahulkushwaha)
• **Twitter/X**: [@stay_rahul](https://twitter.com/stay_rahul)
• **Instagram**: [@stayrahul](https://instagram.com/stayrahul)

Rahul is actively available for high-impact freelance projects and creative software engineering roles.`;
    }

    // 11. Location, Hometown & Whereabouts
    else if (
      query.includes("where") ||
      query.includes("location") ||
      query.includes("live") ||
      query.includes("nepal") ||
      query.includes("city") ||
      query.includes("hometown")
    ) {
      reply = `Rahul is based in **Gwarko, Lalitpur & Kathmandu, Nepal**. His hometown is **Simraungadh (Bara) / Hetauda, Nepal**. He operates remotely with clients and collaborators worldwide across any timezone.`;
    }

    // 12. Resume & CV
    else if (query.includes("resume") || query.includes("cv")) {
      reply = `You can review Rahul's interactive resume right here on the site or check his verified career milestones on the [/journey](/journey) page. His work encompasses full-stack development, BCSIT studies at Quest International College, and 11+ deployed client systems.`;
    }

    // 13. Friendly Greetings
    else if (
      query === "hi" ||
      query === "hello" ||
      query === "hey" ||
      query.startsWith("hi ") ||
      query.startsWith("hello ")
    ) {
      reply = `Hey there! 👋 I'm **stayrahul's AI Assistant**. 

I can answer anything about:
• Rahul's academic education (**Quest International College BCSIT**, **CCRC**, **Adhunik Rastriya**)
• His **11+ shipped projects** (Ice & Fire Cafe, ChatBot AI, Octave Event, Portfolio v4)
• His **tech stack** (Next.js 16, React 19, TypeScript, Framer Motion)
• Contact details & freelance availability

What would you like to know?`;
    }

    // 14. Fallback from FAQs or general introduction
    else {
      const matchedFaq = faqsData.find((f) => {
        const words = f.question.toLowerCase().split(" ");
        return words.some((w) => w.length > 3 && query.includes(w));
      });

      if (matchedFaq) {
        reply = matchedFaq.answer;
      } else {
        reply = `Rahul Kushwaha (**@stayrahul**) is a full-stack developer & vibe coder pursuing BCSIT at **Quest International College** (Gwarko, Lalitpur), with academic roots from **CCRC** (Kathmandu) and **Adhunik Rastriya** (Hetauda).

He has shipped 11+ production projects using Next.js 16, React 19, TypeScript, and Framer Motion. 

Feel free to ask about his **education**, **11+ projects**, **skills**, or how to **contact him at ${selfData.email}**!`;
      }
    }

    // Stream text fallback with natural pacing
    const encoder = new TextEncoder();
    const customStream = new ReadableStream({
      async start(controller) {
        const words = reply.split(" ");
        for (const word of words) {
          controller.enqueue(encoder.encode(word + " "));
          await new Promise((r) => setTimeout(r, 18));
        }
        controller.close();
      },
    });

    return new Response(customStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Chat API Fatal Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate chat response" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
