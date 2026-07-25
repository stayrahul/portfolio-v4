import { selfData, skillsData, experienceData, projectsData, faqsData } from '@/data/portfolioData';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const rawMessages = Array.isArray(body) ? body : (body.messages || []);

    // Get the last user message
    const lastMessage = rawMessages.filter((m: any) => m.role === 'user').pop();
    const userText = lastMessage?.content?.toLowerCase() || '';

    let responseText = "I'm a bit busy right now, but I'd love to connect later. Feel free to reach out via email!";

    // Simple keyword-based manual matching
    if (userText.includes('hello') || userText.includes('hi ') || userText === 'hi' || userText === 'hey') {
      responseText = `Hello! I'm the digital avatar of ${selfData.name}. I'm a frontend developer based in ${selfData.location}. You can ask me about my skills, projects, or experience!`;
    } else if (userText.includes('skill') || userText.includes('tech') || userText.includes('stack')) {
      responseText = `My primary skills include: ${skillsData.join(', ')}.`;
    } else if (userText.includes('project') || userText.includes('work')) {
      const p = projectsData[0];
      responseText = `I've built several projects, such as ${p.title} (${p.des}). Check out my Projects section for more!`;
    } else if (userText.includes('experience') || userText.includes('job') || userText.includes('career')) {
      const e = experienceData[0];
      responseText = `My journey includes working as a ${e.title}. I love crafting premium digital experiences!`;
    } else if (userText.includes('contact') || userText.includes('email') || userText.includes('hire')) {
      responseText = `You can email me directly at ${selfData.email} or connect with me through my social links on the portfolio.`;
    } else {
      // Check FAQs
      let foundFaq = false;
      for (const faq of faqsData) {
        const keywords = faq.question.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(' ').filter(w => w.length > 3);
        if (keywords.length > 0 && keywords.some(k => userText.includes(k))) {
          responseText = faq.answer;
          foundFaq = true;
          break;
        }
      }
      if (!foundFaq) {
         responseText = "That's an interesting question! I am a simple manual assistant right now, so I might not have all the answers. But I recommend checking out my portfolio sections or emailing me directly!";
      }
    }

    // Manually stream the text in Vercel AI SDK format (0:"chunk"\n)
    const stream = new ReadableStream({
      async start(controller) {
        const words = responseText.split(' ');
        for (const word of words) {
          const chunk = `0:${JSON.stringify(word + ' ')}\n`;
          controller.enqueue(new TextEncoder().encode(chunk));
          await delay(40); // Simulate realistic typing speed
        }
        controller.close();
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'x-vercel-ai-data-stream': 'v1'
      }
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process chat request.' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
