import { About } from "@/components/public/about";
import { Experience } from "@/components/public/experiences";
import { Hero } from "@/components/public/hero";
import { SoftSkills } from "@/components/public/skills/soft-skills";
import { TechStack } from "@/components/public/skills/tech-stack";
import { IconTerminal } from "@tabler/icons-react";

export const revalidate = 60;

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <section
        className=" w-full py-8 flex gap-4 flex-col items-center justify-center"
        id="skills"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <IconTerminal className="w-5 h-5 text-[#00AAFF]" />
          <p className="font-mono text-[#00AAFF] text-sm tracking-wider">
            <span className="text-muted-foreground">$</span> ls -la ./skills
          </p>
        </div>
        <h2 className=" font-bold font-mono items-center text-xl md:text-3xl ">
          <span className="text-muted-foreground">&lt;</span>
          <span className="neon-text">Skills</span>
          <span className="text-muted-foreground">/&gt;</span>
        </h2>
        <TechStack />
        <SoftSkills />
      </section>
      <Experience />
    </main>
  );
}
