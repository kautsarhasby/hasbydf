"use client";
import { IconTerminal } from "@tabler/icons-react";
import { experiences } from "./constant";
import { CardExperience } from "./card/card-index";
import { MultiCardExperience } from "./card/sub-card-index";

export function Experience() {
  return (
    <section id="experience" className="w-full mb-6">
      <div>
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <IconTerminal className="w-5 h-5 text-[#00AAFF]" />
            <p className="font-mono text-[#00AAFF] text-sm tracking-wider">
              <span className="text-muted-foreground">$</span> git log --oneline
            </p>
          </div>
          <h2 className=" font-bold font-mono items-center text-xl md:text-3xl ">
            <span className="text-muted-foreground">&lt;</span>
            <span className="neon-text">Experience</span>
            <span className="text-muted-foreground">/&gt;</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Git branch line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00AAFF] via-[#00AAFF]/50 to-transparent" />

          {experiences.map((exp, index) => {
            const isMultiRole = exp.type === "multi";
            return (
              <div
                key={index}
                className="relative mb-12 last:mb-0 pl-16 md:pl-20"
              >
                {isMultiRole ? (
                  <MultiCardExperience experience={exp} />
                ) : (
                  <CardExperience experience={exp} />
                )}
              </div>
            );
          })}

          {/* Initial commit */}
          <div className="relative pl-16 md:pl-20 mt-8">
            <div className="absolute left-4 md:left-6 top-2 w-4 h-4 rounded-full border-2 border-primary/50 bg-background" />
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-[#00AAFF]">*</span> Initial commit: Started
              the journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
