"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Code2, Terminal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IProject } from "../constant";

interface DialogBoxProps {
  project: IProject;
  children: ReactNode;
}

const DialogBox = ({ project, children }: DialogBoxProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-[700px] bg-zinc-950 border-[#00AAFF]/30 text-zinc-100 font-mono shadow-2xl shadow-[#00AAFF]/10">
        <div className="absolute top-0 left-0 w-full h-8 bg-zinc-900/50 border-b border-[#00AAFF]/10 flex items-center px-4 gap-2">
          <div className="w-2 h-2 bg-red-500/80 rounded-full" />
          <div className="w-2 h-2 bg-yellow-500/80 rounded-full" />
          <div className="w-2 h-2 bg-green-500/80 rounded-full" />
          <span className="text-[10px] text-zinc-500 ml-2">
            PROJECT_DETAILS.MD
          </span>
        </div>

        <DialogHeader className="mt-6">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="w-4 h-4 text-[#00AAFF]" />
            <span className="text-xs text-[#00AAFF]/70">
              ~/projects/{project.title.toLowerCase().replace(/\s+/g, "-")}/
            </span>
          </div>
          <DialogTitle className="text-2xl font-bold tracking-tight text-white">
            <span className="text-[#00AAFF]"># </span>
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Project Preview Image */}
          <div className="relative group overflow-hidden rounded-xl border border-[#00AAFF]/20">
            <div className="absolute inset-0 bg-[#00AAFF]/5 group-hover:bg-transparent transition-colors z-10" />
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={450}
              className="object-cover w-full aspect-video opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Description ala comment block */}
          <div className="relative p-4 bg-black/50 border-l-2 border-[#00AAFF] rounded-r-lg">
            <DialogDescription className="text-zinc-300 font-mono leading-relaxed italic">
              {`/* ${project.description} */`}
            </DialogDescription>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-[#00AAFF]/5 border-[#00AAFF]/20 text-[#00AAFF] hover:bg-[#00AAFF]/10 transition-colors"
              >
                #{tag.name}
              </Badge>
            ))}
          </div>
        </div>

        <DialogFooter className="flex sm:justify-between items-center border-t border-[#00AAFF]/10 pt-6">
          <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#00AAFF] animate-pulse rounded-full" />
            Status: {project.status}
          </div>

          <div className="flex gap-3">
            {project.code && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300"
              >
                <Link
                  href={project.code}
                  target="_blank"
                  className="flex gap-2 items-center"
                >
                  <Code2 className="w-4 h-4" />
                  Source
                </Link>
              </Button>
            )}

            {project.link && (
              <Button
                size="sm"
                asChild
                className="bg-[#00AAFF] hover:bg-[#00AAFF]/80 text-black font-bold"
              >
                <Link
                  href={project.link}
                  target="_blank"
                  className="flex gap-2 items-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
