"use client";
import React from "react";
import { Input } from "../../ui/input";
import { IconSearch, IconTerminal } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { IProject, projects } from "./constant";
import DialogBox from "./dialog";
import { ProjectCard } from "./card/project-card";

interface ProjectLayoutProps {
  items: IProject[];
}

export default function ProjectPage({ items }: ProjectLayoutProps) {
  const [query, setQuery] = React.useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <main className="w-full min-h-screen flex justify-center items-center text-white selection:bg-[#00AAFF]/30">
      <div className="container max-w-6xl py-24 px-4">
        <div className="flex items-center gap-3 mb-2">
          <IconTerminal className="w-5 h-5 text-[#00AAFF]" />
          <p className="font-mono text-[#00AAFF] text-sm tracking-wider">
            <span className="text-muted-foreground">$</span> ls ./projects
          </p>
        </div>

        <h2 className="font-bold font-mono text-4xl mb-10">
          <span className="text-muted-foreground">&lt;</span>
          <span className="neon-text">Projects</span>
          <span className="text-muted-foreground">/&gt;</span>
        </h2>

        <section className="relative mb-12 group">
          <div className="absolute -inset-1 bg-[#00AAFF]/20 rounded-xl blur opacity-25 group-focus-within:opacity-50 transition duration-1000"></div>
          <div className="relative">
            <IconSearch className="absolute top-3 left-4 text-[#00AAFF]/50 w-5 h-5" />
            <Input
              type="text"
              onChange={handleInputChange}
              className="w-full h-12 p-2 px-12 text-white bg-zinc-950 border-[#00AAFF]/30 border-2 rounded-xl focus:border-[#00AAFF] focus:ring-0 font-mono placeholder:text-zinc-600"
              placeholder="Search by tech stack or title..."
            />
            <div className="absolute right-4 top-3 hidden md:block">
              <span className="text-xs font-mono text-zinc-500">
                [{projects.length} items]
              </span>
            </div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full border-[#00AAFF]/20 border rounded-2xl bg-zinc-950/50 backdrop-blur-sm overflow-hidden shadow-2xl shadow-[#00AAFF]/10"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/50 border-b border-[#00AAFF]/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500/80 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500/80 rounded-full" />
              <div className="w-3 h-3 bg-green-500/80 rounded-full" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest text-center">
              Project_Explorer.sh
            </span>
            <div className="w-12" />
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items
              .filter((project) => {
                const tagString = project.tags.map((t) => t.name).join(" ");
                const searchContent =
                  `${project.title} ${tagString}`.toLowerCase();
                return query.length
                  ? searchContent.includes(query.toLowerCase())
                  : true;
              })
              .map((project, idx) => (
                <DialogBox key={idx} project={project}>
                  <ProjectCard project={project} index={idx} />
                </DialogBox>
              ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
