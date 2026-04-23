"use client";
import React from "react";
import {
  IconChevronDown,
  IconChevronRight,
  IconFileInfo,
} from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profileData, socialLinks } from "@/lib/constants";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "./constant";

export function Hero() {
  return (
    <main className=" relative min-h-screen pb-8 pt-24 md:py-24 w-full flex flex-col xl:flex-row justify-center items-center gap-10">
      <div className="flex items-center flex-col text-center relative z-10">
        <div className="  ">
          <p className="font-mono text-blue-400 mb-4 text-sm md:text-xl tracking-wider">
            Hello, I&apos;m
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-4xl md:text-4xl font-bold font-mono mb-6 leading-tight">
            <span className="text-white ">Kautsar </span>
            <span className="text-[#00AAFF]">Hasby</span>
          </h1>
        </motion.div>

        <div className="mb-6">
          <h2 className=" flex gap-2 items-center text-xl md:text-2xl lg:text-3xl text-[#00AAFF] font-mono  mb-8 font-light">
            <IconChevronRight />
            <Typewriter
              options={{
                strings: ["Fullstack Developer", "Computer Science Student"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="border-[#00AAFF] text-start max-w-[40rem]  border-2 rounded-xl shadow-[0_0px_64px_rgba(0,0,0,0.25)] p-6  mb-6 shadow-[#00AAFF]/50"
        >
          <p className="text-muted-foreground leading-relaxed md:text-base font-jetbrains">
            <span className="before:content-['//_']">
              {" "}
              Building the future, one line at a time
            </span>
            <br />
            <br />
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">developer</span> = {"{"}
            <br />
            {profileData.map((prf, i) => (
              <React.Fragment key={i.toString()}>
                <span className="pl-4">
                  <span className="text-yellow-400">{prf.key}</span>:{" "}
                  <span className="text-green-400">
                    &quot;{prf.value}&quot;
                  </span>
                  ,
                </span>
                <br />
              </React.Fragment>
            ))}
            {"}"};
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <Button
              key={name}
              asChild
              className={cn(
                "bg-zinc-900",
                "hover:shadow-[#00AAFF]/50 hover:shadow-[0_0px_24px_rgba(0,0,0,0.25)]",
                " w-16 h-16 p-3 rounded-lg border border-muted-foreground transition-all duration-300 group-hover:bg-[#00AAFF] ",
                "group-hover:text-zinc-900 group-hover:border-[#00AAFF]  group",
              )}
            >
              <Link
                href={href}
                target={name !== "Email" ? "_blank" : undefined}
                rel={name !== "Email" ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center w-full h-full"
                aria-label={name}
              >
                <Icon className="text-muted-foreground group-hover:text-[#00AAFF] transition-colors " />
              </Link>
            </Button>
          ))}
        </div>

        <div className="flex flex-col-reverse md:flex gap-4 justify-center">
          <Button variant={"ghost"} asChild>
            <Link
              href="#about"
              className={cn(
                "bg-[#06070A] border-[#00AAFF]/10 border-2 text-[#00AAFF]",
                "flex items-center gap-2 px-8 py-8 font-black font-mono rounded-xl text-lg",
                "transition-all duration-300",
                "hover:border-[#00AAFF]/50 hover:bg-[#00AAFF] hover:text-[#06070A] hover:shadow-[#00AAFF] hover:shadow-[0_0_40px_hsl(175_80%_50%_/_0.15)]",
              )}
            >
              <span>&gt;</span>
              explore.my_portfolio()
              <IconChevronDown className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant={"ghost"} asChild>
            <Link
              href={process.env.NEXT_PUBLIC_RESUME_LINK || "#"}
              target="_blank"
              className={cn(
                "bg-[#00AAFF] border-[#00AAFF]/10 border-2 text-[#06070A]",
                "flex items-center gap-2 px-8 py-8 font-bold font-jetbrains  rounded-xl text-lg",
                "transition-all duration-300",
                "hover:border-[#00AAFF]/50 hover:bg-[#00AAFF] hover:text-[#06070A] hover:shadow-[#00AAFF] hover:shadow-[0_0_40px_hsl(175_80%_50%_/_0.15)]",
              )}
            >
              <span>&gt;</span>
              <IconFileInfo />
              download_my_cv()
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative grid grid-rows-2 grid-cols-2">
        {images.map((image, i) => (
          <div
            key={i.toString()}
            className="relative w-[150px] h-[150px]
                sm:w-[250px] sm:h-[250px]
                md:w-[200px] md:h-[200px]
                xl:w-[250px] xl:h-[250px] overflow-hidden"
          >
            <Image
              src={image}
              alt="kautsar"
              fill
              priority={i === 0}
              className="object-cover object-center"
            />
          </div>
        ))}
        <div className="absolute inset-0  w-full h-full bg-gradient-to-b from-[#06070A] from-5% via-transparent via-50% to-95% to-[#06070A]" />
      </div>
    </main>
  );
}
