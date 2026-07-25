import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Chatbot } from "@/components/ui/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen bg-black w-full overflow-hidden text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  );
}
