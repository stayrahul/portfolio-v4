import { selfData, skillsData, experienceData, projectsData, faqsData } from './portfolioData';

export const getAIPromptContext = () => {
  const experienceString = experienceData.map(e => `- ${e.title}`).join('\n');
  const projectsString = projectsData.map(p => `- ${p.title}: ${p.des}`).join('\n');
  const faqsString = faqsData.map(faq => `Q: ${faq.question}\nA: ${faq.answer}`).join('\n\n');
  
  return `
Name: ${selfData.name}
Location: ${selfData.location}
Roles: ${selfData.roles.join(', ')}
Bio: ${selfData.bio}
Email: ${selfData.email}

Skills:
${skillsData.join(', ')}

Experience:
${experienceString}

Projects:
${projectsString}

Common Questions & Answers about me:
${faqsString}
  `.trim();
};
