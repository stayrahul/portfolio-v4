import { selfData, projectsData, educationData, skillsData } from "@/data/portfolioData";

export function generateStructuredData() {
  const baseUrl = "https://www.rahul.rest";

  // 1. Person Schema
  const personSchema = {
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: selfData.name,
    alternateName: ["stayrahul", "stay_rahul", "@stayrahul", "Rahul", "Rahul Kushwaha"],
    identifier: "stayrahul",
    url: baseUrl,
    image: `${baseUrl}/profile.png`,
    jobTitle: "Full-Stack Developer, Creative Coder & Vibecoder",
    description:
      "Rahul Kushwaha (known online as stayrahul) is a passionate full-stack developer, creative coder, and vibe coder based in Nepal. Currently pursuing BCSIT at Quest International College, Lalitpur (CCRC alumnus). Creator of Simraungadh App, Hostel Management App, Face ID for Mac, and PocketOps.",
    email: selfData.email,
    telephone: selfData.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gwarko, Lalitpur",
      addressRegion: "Bagmati",
      addressCountry: "Nepal",
    },
    alumniOf: educationData.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
      url: edu.institutionUrl,
      sameAs: edu.institutionUrl,
      location: edu.location,
      description: `${edu.degree} (${edu.status}) - ${edu.period}`,
    })),
    sameAs: [
      selfData.socials.github,
      selfData.socials.twitter,
      "https://x.com/stayrahul",
      selfData.socials.linkedin,
      selfData.socials.instagram,
      selfData.socials.facebook,
      selfData.socials.tiktok,
      selfData.socials.whatsapp,
      "https://www.rahul.rest",
      "https://rahul.rest",
      "https://stayrahul.vercel.app",
    ],
    knowsAbout: [
      ...skillsData,
      "Vibe Coding",
      "Next.js 16 Architecture",
      "React 19",
      "Full-Stack Web Development",
      "Modern UI/UX Design",
      "Glassmorphism Design Systems",
      "Generative AI & LLM Engineering",
      "Tailwind CSS v4",
      "Framer Motion Kinetic Physics",
      "Web Audio API",
      "TypeScript",
      "Simraungadh Civic Tech",
      "DevOps Telemetry",
      "Biometrics & CoreML",
    ],
  };

  // 2. WebSite Schema
  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "stayrahul | Rahul Kushwaha Official Portfolio (www.rahul.rest)",
    alternateName: ["stayrahul", "stay_rahul", "Rahul Kushwaha Portfolio", "rahul.rest"],
    description:
      "Official portfolio website of stayrahul (Rahul Kushwaha) — Full-stack developer, vibe coder, and BCSIT student at Quest International College.",
    publisher: {
      "@id": `${baseUrl}/#person`,
    },
    inLanguage: "en-US",
  };

  // 3. ProfilePage Schema
  const profilePageSchema = {
    "@type": "ProfilePage",
    "@id": `${baseUrl}/#profilepage`,
    url: baseUrl,
    name: "About stayrahul (Rahul Kushwaha)",
    mainEntity: {
      "@id": `${baseUrl}/#person`,
    },
  };

  // 4. ItemList Schema for Projects
  const itemListSchema = {
    "@type": "ItemList",
    "@id": `${baseUrl}/#projects`,
    name: "Projects by stayrahul (Rahul Kushwaha)",
    itemListElement: projectsData.map((project, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.des,
        url: project.link,
        image: project.img ? `${baseUrl}${project.img}` : `${baseUrl}/profile.png`,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        author: {
          "@id": `${baseUrl}/#person`,
        },
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [personSchema, websiteSchema, profilePageSchema, itemListSchema],
  };
}
