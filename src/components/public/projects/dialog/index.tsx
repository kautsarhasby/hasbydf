"use client";
import { ExternalLink, MoveRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { IProject } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface props {
  project: IProject;
}

const DialogBox = ({ project }: props) => {
  const [isHover, setIsHover] = useState<boolean>();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="bg-black w-[300px] hover:scale-105  text-slate-300 outline outline-1 outline-slate-700 transition-all shadow-md   rounded-lg flex flex-col  items-center "
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className="relative w-[300px] h-[140px] overflow-hidden ">
            <div
              className={`absolute z-10 text-black ${
                isHover ? "flex" : "hidden"
              } gap-2 w-full h-full items-center justify-center transition-none`}
            >
              View Detail <MoveRight />
            </div>
            <Image
              src={project.metadata.image!}
              fill
              style={{ objectFit: "cover" }}
              sizes="auto"
              alt="Project"
              className={`transition-all rounded-t-lg ${
                isHover ? "blur-[2px]" : ""
              }`}
            />
          </div>
          <div className="pl-2 py-4 w-full grid grid-rows-3 border-t-[1px] border-slate-700">
            <span className=" w-full text-sm px-2">
              {project.metadata.title}
            </span>
            <div>
              <span className="px-2 text-xs">
                {project.metadata.description}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 px-2">
              {project.metadata.tags.map((item, index) => {
                return (
                  <Badge variant={"secondary"} key={index}>
                    #{item}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] bg-black text-white">
        <DialogHeader>
          <DialogTitle>{project.metadata.title}</DialogTitle>
        </DialogHeader>
        <div className="grid justify-center gap-4 py-4">
          <Image
            src={project.metadata.image!}
            alt="Project"
            width={600}
            height={200}
            className="rounded-lg"
          />
        </div>
        <DialogDescription>{project.metadata.description}</DialogDescription>
        <DialogFooter>
          <div className="flex gap-2">
            {project.metadata.tags.map((item, index) => {
              return <Badge key={index}>#{item}</Badge>;
            })}
          </div>
          <Button variant={"secondary"} asChild>
            <Link
              href={project.metadata.url}
              className="flex gap-2"
              target="_blank"
            >
              <ExternalLink />
              View Source
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
