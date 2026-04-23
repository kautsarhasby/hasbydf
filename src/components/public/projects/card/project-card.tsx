"use client";
import React, { forwardRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IProject } from "../constant";

interface ProjectCardProps {
  project: IProject;
  index: number;
}

export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project, index, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        {...props}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative group h-full"
      >
        <div className="h-full cursor-pointer rounded-xl border border-[#00AAFF]/20 bg-zinc-950 hover:border-[#00AAFF]/50 transition-all duration-300 overflow-hidden flex flex-col shadow-lg hover:shadow-[#00AAFF]/5">
          <div className="relative aspect-video w-full overflow-hidden border-b border-[#00AAFF]/10">
            <div className="absolute top-2 left-2 flex gap-1.5 z-20">
              <div className="w-1.5 h-1.5 bg-red-500/80 rounded-full" />
              <div className="w-1.5 h-1.5 bg-yellow-500/80 rounded-full" />
              <div className="w-1.5 h-1.5 bg-green-500/80 rounded-full" />
            </div>

            <div className="absolute inset-0 bg-[#00AAFF]/5 group-hover:bg-transparent transition-colors z-10" />

            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
          </div>

          <div className="p-5 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-mono text-sm md:text-base text-white group-hover:text-[#00AAFF] transition-colors line-clamp-1">
                <span className="text-[#00AAFF]/50">$ </span>
                {project.title}
              </h3>
              <span className="text-[10px] font-mono text-zinc-600">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <p className="text-xs md:text-sm text-zinc-400 line-clamp-3 font-mono mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[9px] font-mono px-2 py-1 bg-[#00AAFF]/5 text-[#00AAFF]/80 rounded border border-[#00AAFF]/10"
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  },
);

ProjectCard.displayName = "ProjectCard";
