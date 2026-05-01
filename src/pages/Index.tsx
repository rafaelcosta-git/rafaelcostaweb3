import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Work } from "@/components/site/Work";
import { Experience } from "@/components/site/Experience";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Contact } from "@/components/site/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Work />
      <Experience />
      <About />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;
