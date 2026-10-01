import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Journey } from "@/components/sections/Journey";
import { StatsBento } from "@/components/sections/StatsBento";
import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { AIAssistant } from "@/components/ui/AIAssistant";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050a14] w-full overflow-x-hidden text-white relative selection:bg-sky-400/30 selection:text-white">
      {/* Reading Progress Line */}
      <ScrollProgress />

      {/* Floating Navigation Header */}
      <Navbar />

      {/* Hero Showcase */}
      <Hero />

      {/* Technical Arsenal & Dual-Marquee */}
      <Skills />

      {/* Featured Works Showcase (2-in-a-row on phone) */}
      <Projects isFeaturedOnly={true} />

      {/* Career Journey & Academic Education Spotlight */}
      <Journey isSpotlight={true} />

      {/* Impact Numbers & Metrics */}
      <StatsBento />

      {/* Clean Minimal Contact CTA */}
      <Contact isSimpleCTA={true} />

      {/* Clean Minimal Footer */}
      <Footer />

      {/* Floatable AI Assistant Chatbot */}
      <AIAssistant />
    </main>
  );
}
