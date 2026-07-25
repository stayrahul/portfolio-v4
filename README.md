<div align="center">

  # ⚡ Portfolio v4

  **A state-of-the-art, high-performance developer portfolio built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.**

  [![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

  [**Live Demo**](https://stayrahul.vercel.app) • [**Report Bug**](https://github.com/stayrahul/portfolio-v4/issues) • [**Request Feature**](https://github.com/stayrahul/portfolio-v4/issues)

</div>

---

## 🌟 Overview

**Portfolio v4** is designed at the intersection of modern engineering precision and rich aesthetics. Engineered to wow visitors at first glance, it features ambient spotlights, kinetic background typography, glassmorphism card components, interactive AI chatbot assistant, responsive 2-column mobile project grid layout, and bi-directional marquee animations.

---

## ✨ Key Features

- **🎨 Ambient Spotlight & Neon Aesthetics**: Custom dark mode visual design with ambient particle spotlights, radial grid overlays, and subtle glowing borders.
- **🤖 Built-in AI Assistant Chatbot**: Powered by AI SDK with custom theme picker and responsive floating action widget.
- **📱 Responsive Mobile-First Design**: Optimized 2-column layout on mobile devices (`grid-cols-2`) for seamless navigation across all device viewports.
- **🔄 Dual Marquee "Tech Arsenal"**: Bi-directional smooth infinite scrolling tech badges (left-to-right & right-to-left) with category breakdown cards.
- **🛠️ Category-Filtered Projects**: Interactive filter tabs (*All*, *Web Apps*, *AI & Tools*) showcasing live demos and source code links.
- **💼 Interactive Timeline & Roles**: Glassmorphic career timeline grid with direct curriculum / CV download link.
- **📩 Interactive Contact Suite**: Seamless contact form with transmission status indicators, direct email, and location metadata.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), [PostCSS](https://postcss.org/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/), [Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate) |
| **AI Integration** | [@ai-sdk/react](https://sdk.vercel.ai/docs), [@ai-sdk/google](https://sdk.vercel.ai/docs) |
| **Icons** | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |

---

## 📂 Project Structure

```text
portfolio-v4/
├── public/                     # Static assets (images, icons, CV PDF, background grids)
├── src/
│   ├── app/
│   │   ├── api/chat/           # AI Chatbot endpoint
│   │   ├── globals.css         # Tailwind CSS v4 import, keyframes & glass utilities
│   │   ├── layout.tsx          # Root layout & font configuration
│   │   └── page.tsx            # Main portfolio page entry point
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Contact.tsx     # Contact form section & metadata
│   │   │   ├── Experience.tsx  # Career timeline & roles section
│   │   │   ├── Hero.tsx        # Hero spotlight & kinetic header
│   │   │   ├── Projects.tsx    # Selected works grid with filter tabs
│   │   │   └── Skills.tsx      # Dual marquee & skill category cards
│   │   └── ui/
│   │       ├── Chatbot.tsx     # Floating AI Chatbot assistant with theme picker
│   │       ├── Footer.tsx      # Global footer & social links
│   │       ├── Navbar.tsx      # Floating glassmorphic navigation bar
│   │       ├── spotlight.tsx   # Aceternity UI spotlight SVG component
│   │       └── text-generate-effect.tsx # Kinetic text animation component
│   ├── data/
│   │   └── portfolioData.ts    # Portfolio bio, skills, roles & project entries
│   └── lib/
│       └── utils.ts            # Class name merger helper (clsx + tailwind-merge)
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js 18+ and npm installed on your system.

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/stayrahul/portfolio-v4.git
   cd portfolio-v4
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 📦 Building for Production

To generate an optimized production build:

```bash
npm run build
npm run start
```

---

## 🤝 Author & Socials

**Rahul Kushwaha** — *Frontend Developer & Creative Coder*

- 🌐 Website: [stayrahul.vercel.app](https://stayrahul.vercel.app)
- 💻 GitHub: [@stayrahul](https://github.com/stayrahul)
- 💼 LinkedIn: [Rahul Kushwaha](https://linkedin.com/in/rahulkushwaha)
- 🐦 Twitter: [@stay_rahul](https://twitter.com/stay_rahul)
- ✉️ Email: rahul7926963@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
