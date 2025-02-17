"use client";
import { ExternalLink, MoveRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DiGithubBadge } from "react-icons/di";
import Link from "next/link";

type DialogBoxProps = {
  image: string;
  title: string;
  description: string;
  code: string;
  link: string;
  tech: { name: string }[];
};

const DialogBox = ({
  image,
  title,
  description,
  code,
  link,
  tech,
}: DialogBoxProps) => {
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
              className={`absolute z-10 text-white ${
                isHover ? "flex" : "hidden"
              } gap-2 w-full h-full items-center justify-center transition-none`}
            >
              View Detail <MoveRight />
            </div>
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              alt="Project"
              className={`transition-all rounded-t-lg ${
                isHover ? "blur-[2px]" : ""
              }`}
            />
          </div>
          <div className="p-2 w-full border-t-[1px] border-slate-700">
            <span className=" w-full text-sm px-2">{title}</span>
            <p className="px-2 text-xs">{description}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="grid justify-center gap-4 py-4">
          <Image
            src={image}
            alt="Project"
            width={600}
            height={200}
            className="rounded-lg"
          />
        </div>
        <DialogDescription className="grid">
          {description}
          <span className="font-bold">Tech used :</span>
          <ul className="pl-4">
            {tech.map((item, index) => {
              return <li key={index}>{item.name}</li>;
            })}
          </ul>
        </DialogDescription>
        <DialogFooter>
          <Link
            href={code}
            className={`flex gap-2  ${buttonVariants({ variant: "default" })}`}
            target="_blank"
          >
            <DiGithubBadge />
            Source Code
          </Link>
          <Link
            href={link}
            className={`flex gap-2  ${buttonVariants({ variant: "default" })}`}
            target="_blank"
          >
            <ExternalLink />
            Visit Page
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
