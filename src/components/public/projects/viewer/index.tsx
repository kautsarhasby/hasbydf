"use client";
import { IconArrowRight, IconTerminal } from "@tabler/icons-react";
import Link from "next/link";
import { projects } from "../constant";
import { ProjectCard } from "../card/project-card";

export function ProjectViewer() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section
      className="w-full py-20 flex justify-center "
      id="projects-preview"
    >
      <div className="container max-w-6xl px-4 flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3 mb-2">
            <IconTerminal className="w-5 h-5 text-[#00AAFF]" />
            <p className="font-mono text-[#00AAFF] text-sm tracking-wider">
              <span className="text-muted-foreground">$</span> query --limit 4
              ./projects
            </p>
          </div>

          <h2 className="font-bold font-mono text-xl md:text-3xl">
            <span className="text-muted-foreground">&lt;</span>
            <span className="neon-text">Featured_Projects</span>
            <span className="text-muted-foreground">/&gt;</span>
          </h2>
        </div>

        {/* Project Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.title} index={idx} project={project} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-6">
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-zinc-950 border-2 border-[#00AAFF]/30 rounded-xl font-mono text-[#00AAFF] hover:border-[#00AAFF] transition-all duration-300 overflow-hidden shadow-[0_0px_24px_rgba(0,170,255,0.1)] hover:shadow-[#00AAFF]/40"
          >
            <div className="absolute inset-0 bg-[#00AAFF]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-2 text-sm">
              ./view_all_projects.sh{" "}
              <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest before:content-['//_']">
            Explore the full database
          </p>
        </div>
      </div>
    </section>
  );
}
