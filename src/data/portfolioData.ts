export interface Project {
  id: number;
  title: string;
  des: string;
  longDes?: string;
  img: string;
  iconLists: string[];
  link: string;
  sourceCode?: string;
  tags?: string[];
  category?: "Flagship" | "Commercial" | "AI & Web Apps" | "Portfolio";
  features?: string[];
  metrics?: string;
  year?: string;
  status?: "Active / In Development" | "Active Build" | "Live" | "Completed" | "Milestone";
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface JourneyMilestone {
  id: number;
  period: string;
  role: string;
  companyOrFocus: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface StatItem {
  id: number;
  label: string;
  value: string;
  subtext: string;
  iconName: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

export const selfData = {
  name: "Rahul Kushwaha",
  handle: "stayrahul",
  alias: "stayrahul",
  fullName: "Rahul Kushwaha (stayrahul)",
  roles: [
    "Full-Stack Developer",
    "Creative Coder & Vibecoder",
    "UI/UX Architect",
    "BCSIT Student"
  ],
  bio: "Hi, I'm Rahul Kushwaha (@stayrahul) — a passionate full-stack developer, creative coder, and vibe coder based in Nepal. Currently pursuing BCSIT at Quest International College, Lalitpur. I build immersive, lightning-fast web applications with clean design aesthetics.",
  email: "rahul7926963@gmail.com",
  phone: "+977 9822228722",
  socials: {
    github: "https://github.com/stayrahul",
    linkedin: "https://linkedin.com/in/rahulkushwaha",
    twitter: "https://twitter.com/stay_rahul",
    instagram: "https://instagram.com/stayrahul",
    facebook: "https://facebook.com/stayrahul",
    tiktok: "https://tiktok.com/@stayrahul",
    whatsapp: "https://wa.me/9779822228722"
  },
  location: "Gwarko, Lalitpur & Kathmandu, Nepal",
  hometown: "Simraungadh, Bara / Hetauda, Nepal",
  resume: "https://github.com/stayrahul",
  availableForWork: true,
  educationSummary: "BCSIT (2026 — Present) at Quest International College (Gwarko, Lalitpur) • Class 11 & 12 — Science (2024 — 2026) at Capital College and Research Centre (Kathmandu) • Class 9 to Class 10 (Completed in 2024) at Adhunik Rastriya Secondary School (Hetauda)"
};

export const educationData: EducationItem[] = [
  {
    id: 1,
    degree: "BCSIT (Bachelor of Computer Science & Information Technology)",
    institution: "Quest International College",
    institutionUrl: "https://quest.edu.np/",
    location: "Gwarko, Lalitpur, Nepal",
    period: "2026 — Present",
    status: "Currently Pursuing (Undergraduate)",
    description: "Deepening practical and theoretical mastery of computer science, modern software architecture, database management systems, data structures, and advanced cloud technologies.",
    highlights: [
      "Affiliated with Pokhara University",
      "Specializing in Modern Web Architectures & Full-Stack Systems",
      "Active participant in technical symposiums, hackathons & developer circles"
    ],
    skills: ["Software Engineering", "Data Structures", "DBMS", "Computer Networks", "Web Systems"]
  },
  {
    id: 2,
    degree: "Class 11 & 12 — Science",
    institution: "Capital College and Research Centre",
    institutionUrl: "https://ccrc.edu.np/",
    location: "Kathmandu, Nepal",
    period: "2024 — 2026",
    status: "Completed (+2 Science)",
    description: "Rigorous higher-secondary curriculum focused on core sciences and computing. Developed rigorous problem-solving logic, algorithmic foundations, and mathematics.",
    highlights: [
      "Graduated from Capital College and Research Centre (CCRC), Kathmandu",
      "Focused on C/C++ programming and computational logic",
      "Advanced studies in Mathematics and Physics",
      "Built early web projects and discovered passion for creative coding & full-stack development"
    ],
    skills: ["C/C++", "Algorithmic Logic", "Advanced Mathematics", "Physics", "Computer Fundamentals"]
  },
  {
    id: 3,
    degree: "Class 9 to Class 10 (SEE)",
    institution: "Adhunik Rastriya Secondary School",
    institutionUrl: "https://schooladhunik.edu.np/",
    location: "Hetauda, Makwanpur, Nepal",
    period: "Completed in 2024",
    status: "Completed in 2024 (SEE)",
    description: "Secondary school education building foundational academic excellence in science, mathematics, and early computer literacy.",
    highlights: [
      "Completed Class 9 to Class 10 Secondary Education Examination (SEE) in 2024",
      "Adhunik Rastriya Secondary School, Hetauda",
      "Demonstrated early talent in mathematics, logical reasoning, and computer fundamentals",
      "Formative era sparking the journey into coding and digital creation"
    ],
    skills: ["Mathematics", "Science", "Computer Literacy", "Analytical Thinking"]
  }
];

export const statsData: StatItem[] = [
  {
    id: 1,
    value: "15+",
    label: "Projects & Builds",
    subtext: "Commercial portals, AI apps & active systems",
    iconName: "Code2"
  },
  {
    id: 2,
    value: "100%",
    label: "Modern Stack",
    subtext: "Next.js 16, React 19 & TypeScript",
    iconName: "Sparkles"
  },
  {
    id: 3,
    value: "14+",
    label: "Core Technologies",
    subtext: "Full-stack, UI/UX & AI systems",
    iconName: "Layers"
  },
  {
    id: 4,
    value: "99.9%",
    label: "Performance Score",
    subtext: "Fast, responsive & accessible",
    iconName: "Zap"
  }
];

export const skillsData = [
  "React.js", "Next.js", "TypeScript", "Tailwind CSS", 
  "Framer Motion", "Node.js", "MongoDB", "Express.js", 
  "JavaScript", "HTML5", "CSS3", "Git", "Figma", "Web Audio API", "Google Gemini AI"
];

export const experienceData = [
  { id: 1, title: "Full-Stack Developer" },
  { id: 2, title: "Creative Coder & Vibecoder" },
  { id: 3, title: "UI/UX Architect" },
  { id: 4, title: "AI & LLM Explorer" },
  { id: 5, title: "Next.js 16 Specialist" },
  { id: 6, title: "Open Source Contributor" },
  { id: 7, title: "Frontend Craftsman" },
  { id: 8, title: "BCSIT Scholar" }
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: 1,
    period: "2025 — Present",
    role: "Creative Developer & Vibe Coder",
    companyOrFocus: "Portfolio v4 & AI Prototypes",
    description: "Architecting high-aesthetic, ultra-fast web experiences utilizing Next.js 16, Tailwind CSS v4, Framer Motion, and AI assistant interfaces.",
    highlights: [
      "Crafted bespoke digital products with rich micro-interactions and dark neon themes",
      "Pioneered vibe-coding workflows integrating modern AI tooling and rapid iteration",
      "Engineered responsive, highly accessible UIs with seamless audio-visual polish"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Gemini AI"]
  },
  {
    id: 2,
    period: "2024 — 2025",
    role: "Frontend Engineer & UI Specialist",
    companyOrFocus: "Client Ventures & Commercial Brand Hubs",
    description: "Delivered digital experiences for regional businesses and events including Ice & Fire Cafe, Octave Event, and commercial wholesale portals.",
    highlights: [
      "Built custom interactive storefronts with dynamic brand aesthetics and menu displays",
      "Enhanced mobile usability, elevating user engagement and customer inquiries",
      "Engineered automated asset capture and dynamic screenshot pipelines"
    ],
    tech: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Puppeteer"]
  },
  {
    id: 3,
    period: "2023 — 2024",
    role: "Full-Stack Web Explorer",
    companyOrFocus: "Open Source & Collaborative Ecosystems",
    description: "Explored modern JavaScript/TypeScript paradigms, cloud deployment architectures, real-time communication, and responsive interface systems.",
    highlights: [
      "Constructed multi-version portfolio experiments iterating on performance & visual flair",
      "Designed conversational AI chatbots with real-time streaming interfaces",
      "Published active open-source projects on GitHub with structured documentation"
    ],
    tech: ["JavaScript", "HTML5/CSS3", "React", "Express.js", "MongoDB", "Git"]
  }
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio v4 (Obsidian Cybernetic)",
    des: "Elite next-generation cybernetic developer portfolio engineered with Next.js 16 Turbopack, interactive CLI sandbox, 3D card tilt physics, and Gemini AI.",
    longDes: "The culmination of multi-year design evolution: featuring high-density dot grid matrices, Web Audio synthesizer clicks, tabbed terminal emulator, and Gemini 2.5 Flash chatbot integration.",
    img: "/portfolio4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://stayrahul.vercel.app",
    sourceCode: "https://github.com/stayrahul/portfolio-v4",
    category: "Flagship",
    status: "Active / In Development",
    tags: ["Flagship", "Next.js 16", "AI Assistant", "Web Audio"],
    features: [
      "Tabbed interactive CLI terminal with real-time execution",
      "Google Gemini AI live chat assistant with streaming reasoning",
      "3D dynamic card tilt physics with specular glints",
      "Comprehensive SEO & LLMs knowledge graph indexing"
    ],
    metrics: "100/100 Core Web Vitals & Sub-400ms Turbopack reloads",
    year: "2026"
  },
  {
    id: 2,
    title: "Simraungadh App (Civic & Heritage Smart Portal)",
    des: "Cultural heritage, municipal notices, local trade directory, and civic connectivity platform for the historic city of Simraungadh.",
    longDes: "An all-in-one digital portal designed for Simraungadh (Bara, Nepal). Features include historical monument guides (Ranivas Temple, ancient ruins), local business directories, emergency contacts, civic grievance reporting, and municipal news updates.",
    img: "/simraungadh-app.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg"],
    link: "https://simraungadh.vercel.app",
    sourceCode: "https://github.com/stayrahul/simraungadh-app",
    category: "Commercial",
    status: "Active Build",
    tags: ["Active Build", "Civic Tech", "Simraungadh", "Next.js"],
    features: [
      "Interactive historical monuments & heritage exploration map",
      "Local business directory & commerce marketplace",
      "Municipal announcements & civic grievance ticketing",
      "Bilingual support (Nepali & English) with offline caching"
    ],
    metrics: "Targeting 10,000+ residents & cultural tourists across Bara",
    year: "2026"
  },
  {
    id: 3,
    title: "Hostel Management App (Smart ERP)",
    des: "Full-stack ERP system for student hostels: automated room allocation, fee ledger, mess tracking, and warden administration.",
    longDes: "A comprehensive digital administration system for student hostels and boarding residences. Solves room allocation chaos, tracks fee payments and balances with PDF receipts, automates mess meal planning and grocery inventory, and provides an instant grievance desk.",
    img: "/hostel-mgmt.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/node1.svg"],
    link: "https://hostel-mgmt.vercel.app",
    sourceCode: "https://github.com/stayrahul/hostel-management-app",
    category: "Commercial",
    status: "Active Build",
    tags: ["Active Build", "ERP", "Management", "Full-Stack"],
    features: [
      "Visual room & bed allocation matrix with occupancy analytics",
      "Automated fee billing, fine calculations, and invoice exports",
      "Daily mess meal attendance logging & meal count forecasting",
      "Student leave pass request workflow & warden authorization"
    ],
    metrics: "Designed to reduce administrative workload by over 70%",
    year: "2026"
  },
  {
    id: 4,
    title: "Face ID for Mac (Biometric Security Suite)",
    des: "Biometric facial recognition lock and authentication engine for macOS, running local neural embeddings for instant unlock.",
    longDes: "A native-feeling biometric facial authentication utility tailored for macOS. Utilizing local machine learning models via CoreML and OpenCV, it leverages the built-in FaceTime HD camera to recognize owner face embeddings, unlock the screen in milliseconds, lock sensitive apps, and snap intruder photos upon unauthorized access.",
    img: "/faceid-mac.jpg",
    iconLists: ["/c.svg", "/ts.svg", "/git.svg", "/node1.svg"],
    link: "https://github.com/stayrahul/face-id-mac",
    sourceCode: "https://github.com/stayrahul/face-id-mac",
    category: "AI & Web Apps",
    status: "Active Build",
    tags: ["Active Build", "macOS", "AI", "Biometrics", "CoreML"],
    features: [
      "Ultra-fast local facial landmark detection & cosine similarity matching",
      "Automatic hands-free screen unlock on user presence detection",
      "Intruder snapshot capture with timestamp logging",
      "Privacy-first: 100% on-device processing with zero cloud data transmission"
    ],
    metrics: "Sub-350ms verification with Apple Silicon Neural Engine acceleration",
    year: "2026"
  },
  {
    id: 5,
    title: "PocketOps (Mobile-First Cloud & DevOps Telemetry)",
    des: "Real-time DevOps and server telemetry monitor in your pocket. Track Docker containers, CPU/RAM spikes, and trigger deployments on the go.",
    longDes: "A responsive, high-velocity infrastructure telemetry and server management client built for engineers. Connects to Docker daemons, Linux servers, and cloud endpoints via lightweight agents, providing live resource telemetry, instant downtime alerts, container restart controls, and webhook deployment triggers.",
    img: "/pocketops.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/node1.svg"],
    link: "https://pocketops.vercel.app",
    sourceCode: "https://github.com/stayrahul/pocketops",
    category: "AI & Web Apps",
    status: "Active Build",
    tags: ["Active Build", "DevOps", "Monitoring", "Cloud", "Containers"],
    features: [
      "Live WebSocket stream of server CPU, RAM, disk, and network I/O",
      "Docker container lifecycle control (start, stop, restart, view logs)",
      "Instant webhook trigger for GitHub Actions and production deploy pipelines",
      "Threshold alert push notifications for sudden downtime or latency spikes"
    ],
    metrics: "Low-overhead telemetry consuming under 12MB RAM on host server",
    year: "2026"
  },
  {
    id: 6,
    title: "Ice & Fire Cafe",
    des: "Experience an exquisite culinary journey where bold spices meet comforting classics. Handcrafted daily in the heart of Simraungadh.",
    longDes: "A bespoke culinary website built for Ice & Fire Cafe in Simraungadh, designed to reflect the warmth, spices, and cozy ambiance of the restaurant.",
    img: "/iceandfire.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://iceandfirecafe.vercel.app",
    sourceCode: "https://github.com/stayrahul/iceandfirecafe",
    category: "Commercial",
    status: "Live",
    tags: ["Commercial", "E-Commerce", "Branding"],
    features: [
      "Dynamic interactive menu with rich imagery",
      "Mobile-optimized order and inquiry contact pipeline",
      "Fast static rendering with sub-second page loads"
    ],
    metrics: "Over 5,000+ local views generated",
    year: "2025"
  },
  {
    id: 7,
    title: "ChatBot AI (Conversational Intelligence)",
    des: "A conversational AI chatbot using natural language understanding. Built with modern web tools and deployed for real-time interaction.",
    longDes: "An intelligent generative AI conversational interface with streaming markdown responses, session management, and contextual knowledge integration.",
    img: "/chatbot-ai.png",
    iconLists: ["/re.svg", "/git.svg", "/node1.svg", "/tail.svg"],
    link: "https://my-awesome-chatbot-two-xi.vercel.app",
    sourceCode: "https://github.com/stayrahul/ChatBot",
    category: "AI & Web Apps",
    status: "Live",
    tags: ["AI", "GenAI", "Chatbot", "Streaming"],
    features: [
      "Real-time token streaming with typing animation",
      "Context-aware response reasoning",
      "Prompt preset suggestions and history storage"
    ],
    metrics: "Sub-200ms latency on edge runtimes",
    year: "2024"
  },
  {
    id: 8,
    title: "Octave Tech & Esports Event",
    des: "Empowering youth through tech & esports. Operating under Runway Career Connect—Nepal's largest youth career mentorship platform.",
    longDes: "High-energy event landing page engineered for the Octave Tech & Esports tournament, integrating dynamic tournament schedules, registration forms, and sponsor showcases.",
    img: "/octave-event.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://octave-event.vercel.app",
    sourceCode: "https://github.com/stayrahul/octave-event",
    category: "Commercial",
    status: "Completed",
    tags: ["Esports", "Event", "Community"],
    features: [
      "Dynamic tournament bracket overview and schedule countdown",
      "Interactive attendee registration flow",
      "Sponsor and mentor tribute showcase"
    ],
    metrics: "Supported 500+ tournament participants",
    year: "2024"
  },
  {
    id: 9,
    title: "Portfolio 3.0 (Titan Terminal)",
    des: "A real-time collaborative hub with instant file synchronization and multi-user presence. Built for seamless team productivity.",
    longDes: "An ambitious portfolio experiment combining real-time collaboration concepts, smooth fluid animations, and a customized dark neon cyber aesthetic.",
    img: "/portfolio3-titan.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://portfolio-3-0-liart.vercel.app",
    sourceCode: "https://github.com/stayrahul/Portfolio-3.0",
    category: "Portfolio",
    status: "Completed",
    tags: ["Next.js", "Collaboration", "Animation", "Convex"],
    features: [
      "Real-time synchronized interactive modules",
      "Ultra-fluid spring physics using Framer Motion",
      "Glassmorphic visual hierarchy with custom SVG spotlights"
    ],
    metrics: "100% PageSpeed Best Practices score",
    year: "2025"
  },
  {
    id: 10,
    title: "Rabindra Store (B2B Wholesale Portal)",
    des: "Premium Wholesale for Local Business. The leading wholesale supplier for premium goods in Simraungadh.",
    longDes: "A modern B2B wholesale platform allowing local retail stores to browse catalog products, request bulk quotes, and connect with warehouse logistics.",
    img: "/rabindra-store-full.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://rabindra-store.vercel.app",
    sourceCode: "https://github.com/stayrahul/rabindra-store",
    category: "Commercial",
    status: "Live",
    tags: ["Wholesale", "B2B", "Commerce"],
    features: [
      "Structured product catalog organized by category",
      "Quick WhatsApp bulk order routing",
      "Fast low-bandwidth mobile optimization"
    ],
    metrics: "Streamlined wholesale ordering for 40+ local merchants",
    year: "2024"
  },
  {
    id: 11,
    title: "HD Movie Hub (Cinematic Streaming UI)",
    des: "A movie streaming platform interface with high-quality streaming UI and custom branding elements.",
    longDes: "A sleek streaming UI designed for cinematic content discovery, featuring hero banners, trailer preview modals, category filters, and rating badges.",
    img: "/hdmoviehub.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://hdmovieshub.vercel.app",
    sourceCode: "https://github.com/stayrahul/hdmoviehub",
    category: "AI & Web Apps",
    status: "Live",
    tags: ["Entertainment", "Media Streaming", "UI/UX"],
    features: [
      "Cinematic poster layouts with smooth hover reveal effects",
      "Real-time search and filter by genre and release date",
      "Custom responsive media player preview integration"
    ],
    metrics: "Instantaneous client-side filtering",
    year: "2024"
  },
  {
    id: 12,
    title: "Rabindra Kushwaha - Strategic Portfolio",
    des: "Strategic Visionary building scalable businesses. Managing regional investments and driving growth across commercial portfolios.",
    longDes: "Executive showcase website highlighting regional investment projects, commercial developments, and strategic management portfolios.",
    img: "/rabindra-vercel.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/php.svg"],
    link: "https://www.rabindrakushwaha.com.np/",
    sourceCode: "https://github.com/stayrahul/rabindrakushwaha",
    category: "Commercial",
    status: "Live",
    tags: ["Executive", "Corporate", "Portfolio"],
    features: [
      "Executive biography and leadership philosophy",
      "Investment venture highlights and achievements",
      "Custom domain configuration with SSL"
    ],
    metrics: "Official digital presence for regional business leadership",
    year: "2024"
  },
  {
    id: 13,
    title: "Code-Create-Inspire (Sushant's Portfolio)",
    des: "A modern, creative portfolio built for Sushant Kushwaha, featuring smooth animations and a sleek digital experience.",
    longDes: "A customized personal brand portfolio developed with high visual fidelity, featuring interactive cards, animated skill badges, and contact routing.",
    img: "/portfolio3.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/git.svg"],
    link: "https://www.sushantkushwaha.com.np/",
    sourceCode: "https://github.com/stayrahul/stayrahul1",
    category: "Portfolio",
    status: "Live",
    tags: ["Portfolio", "Client", "Design"],
    features: [
      "Full responsive grid system across mobile and desktop",
      "Interactive project previews with external links",
      "Polished contact integration"
    ],
    metrics: "Delivered on schedule with 100% client satisfaction",
    year: "2024"
  },
  {
    id: 14,
    title: "Portfolio 2.0 (MERN & Audio Platform)",
    des: "MERN-stack portfolio platform integrating generative AI concepts with secure authentication and modern dashboard design.",
    longDes: "The second major iteration of the portfolio platform, incorporating MongoDB database schemas, Clerk authentication, and audio generative exploration.",
    img: "/portfolio2-real.png",
    iconLists: ["/re.svg", "/tail.svg", "/node1.svg", "/git.svg"],
    link: "https://stayrahul-v2.vercel.app",
    sourceCode: "https://github.com/stayrahul/portfolio-v2",
    category: "Portfolio",
    status: "Milestone",
    tags: ["MERN", "Authentication", "MongoDB", "Express"],
    features: [
      "MongoDB database integration for dynamic content",
      "Clerk secure user authentication",
      "Interactive component bento grid"
    ],
    metrics: "Pioneered interactive bento layouts",
    year: "2024"
  },
  {
    id: 15,
    title: "Portfolio 1.0 (The Genesis)",
    des: "The original foundational portfolio site that launched the coding journey. Clean, focused on core web vitals and responsive layouts.",
    longDes: "The Genesis edition marking the official start of Rahul Kushwaha's development career, built with clean HTML5 semantic structure, modern CSS, and vanilla JS.",
    img: "/portfolio1.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/re.svg"],
    link: "https://stayrahul.me/",
    sourceCode: "https://github.com/stayrahul/portfolio",
    category: "Portfolio",
    status: "Milestone",
    tags: ["Genesis", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Ultra-lightweight static asset architecture",
      "Pixel-perfect responsive layout across all device viewports",
      "Clean semantic markup adhering to web standards"
    ],
    metrics: "The inception of the stayrahul digital brand",
    year: "2023"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Rabindra Kushwaha",
    role: "Founder & Managing Director",
    company: "Rabindra Store",
    quote: "Rahul transformed our wholesale business with a sleek digital presence. His attention to design detail, swift delivery, and responsive UI exceeded every expectation."
  },
  {
    id: 2,
    name: "Sushant Kushwaha",
    role: "Creative Partner",
    company: "Code-Create-Inspire",
    quote: "Working with Rahul was a breeze. He understands modern design trends intuitively and writes clean, maintainable code. The animations and glassmorphism look breathtaking!"
  },
  {
    id: 3,
    name: "Lead Coordinator",
    role: "Event Director",
    company: "Octave Esports",
    quote: "Our tournament landing page handled heavy registration traffic smoothly. Rahul's knack for dark cyber neon themes matched our esports branding flawlessly."
  }
];

export const navItems = [
  { name: "Projects", link: "/projects" },
  { name: "Journey", link: "/journey" },
  { name: "Skills", link: "/#skills" },
  { name: "Impact", link: "/#stats" }
];

export const quickChatPrompts = [
  "Who is stayrahul?",
  "What is your education & college background?",
  "List all 15+ projects & active builds",
  "Tell me about Simraungadh App & Face ID for Mac",
  "What is your tech stack?",
  "How can I contact or hire you?"
];

export const faqsData = [
  {
    question: "Who is stayrahul?",
    answer: "stayrahul is Rahul Kushwaha — an innovative full-stack developer, creative coder, and vibe coder based in Nepal. He specializes in React 19, Next.js 16, TypeScript, modern UI/UX design, and generative AI architectures."
  },
  {
    question: "What is Rahul's education background?",
    answer: "1. BCSIT (Bachelor of Computer Science & Information Technology, 2026 — Present) from Quest International College, Gwarko, Lalitpur (https://quest.edu.np/).\n2. Class 11 & 12 — Science (2024 — 2026) from Capital College and Research Centre (CCRC), Kathmandu (https://ccrc.edu.np/).\n3. Class 9 to Class 10 / SEE (Completed in 2024) from Adhunik Rastriya Secondary School, Hetauda (https://schooladhunik.edu.np/)."
  },
  {
    question: "What projects has stayrahul built?",
    answer: "Rahul has engineered 15+ complete projects including active builds: Simraungadh App (Civic & Heritage Smart Portal), Hostel Management App (Smart ERP), Face ID for Mac (Biometric Security Suite), PocketOps (Cloud Telemetry Monitor), Portfolio v4 (Flagship 2026), Ice & Fire Cafe (Simraungadh), ChatBot AI, Octave Esports Event, Portfolio 3.0, Rabindra Store, HD Movie Hub, Strategic Portfolio for Rabindra, Code-Create-Inspire for Sushant, Portfolio 2.0, and Portfolio 1.0 (The Genesis). Check the /projects page or click 'View All Projects' for all details!"
  },
  {
    question: "Why do you code / What is Vibe Coding?",
    answer: "Rahul codes for the sheer joy, flow state, and creative freedom of transforming ideas into reality. Vibe coding is about blending engineering excellence with high aesthetics and modern AI acceleration."
  },
  {
    question: "What is your tech stack?",
    answer: "Core stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, Node.js, Express, MongoDB, Google Gemini AI, and Web Audio APIs."
  },
  {
    question: "Where are you located and how can I contact you?",
    answer: "Based in Gwarko, Lalitpur & Kathmandu, Nepal (origin: Simraungadh & Hetauda). You can reach Rahul directly via email at rahul7926963@gmail.com, WhatsApp (+977 9822228722), or via the /contact page form."
  }
];
