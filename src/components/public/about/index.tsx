"use client";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  IconCode,
  IconRocket,
  IconUsers,
  IconTerminal,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: IconCode,
    title: "cleanCode()",
    description:
      "Writing maintainable, scalable, and efficient code is my priority.",
  },
  {
    icon: IconRocket,
    title: "innovate()",
    description: "Always exploring new technologies and best practices.",
  },
  {
    icon: IconUsers,
    title: "collaborate()",
    description: "Thriving in team environments and agile methodologies.",
  },
];

export function About() {
  return (
    <section className="items-center flex justify-center py-4" id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-center container">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <IconTerminal className="w-5 h-5 text-[#00AAFF]" />
            <p className="font-mono text-[#00AAFF] text-sm tracking-wider">
              <span className="text-muted-foreground">$</span> cat about.txt
            </p>
          </div>

          <h2 className="font-bold font-mono text-3xl mb-6">
            <span className="text-muted-foreground">&lt;</span>
            <span className="neon-text">About</span>
            <span className="text-muted-foreground">/&gt;</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="border-[#00AAFF] border-2 rounded-xl shadow-[0_0px_64px_rgba(0,0,0,0.25)]  shadow-[#00AAFF]/50"
          >
            <div className="flex gap-2 p-4">
              <div className="w-4 h-4 bg-red-500 rounded-full" />
              <div className="w-4 h-4 bg-yellow-500 rounded-full" />
              <div className="w-4 h-4 bg-green-500 rounded-full" />
              <span className="ml-3 text-xs font-mono text-muted-foreground">
                readme.md
              </span>
            </div>
            <Separator className="bg-[#00AAFF]/50" />
            <div className="bg-black rounded-xl p-6 space-y-4 text-muted-foreground font-jetbrains   leading-relaxed">
              <p>
                <span className="text-[#00AAFF]/50"># Hello, World!</span>
              </p>
              <p>
                I&apos;m a software engineer with a passion for building elegant
                solutions to complex problems. My journey started with curiosity
                about how things work, and it has evolved into a career
                dedicated to creating impactful software.
              </p>
              <p>
                I specialize in{" "}
                <span className="text-[#00AAFF]">full-stack development</span>{" "}
                with a focus on creating responsive, user-friendly applications.
                Whether it&apos;s architecting backend systems or crafting
                intuitive user interfaces, I bring dedication and attention to
                detail to every project. When I&apos;m not coding, you&apos;ll
                find me exploring new technologies
              </p>
            </div>
          </motion.div>
        </div>
        <div className="space-y-4 mt-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={cn(
                "p-4 rounded-xl flex border-[#00AAFF]/30  border gap-5 items-start group ",
                "hover:shadow-[#00AAFF]/50 hover:shadow-[0_0px_24px_rgba(0,0,0,0.25)]",
              )}
            >
              <div
                className={cn(
                  "shadow-[#00AAFF]/50 shadow-[0_0px_24px_rgba(0,0,0,0.25)]",
                  "p-3 rounded-xl border-2 border-zinc-900 bg-zinc-900  text-[#00AAFF] transition-all duration-300",
                  "group-hover:bg-[#00AAFF]  group-hover:text-zinc-900 group-hover:border-[#00AAFF]",
                )}
              >
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-mono font-semibold text-white mb-2 group-hover:text-[#00AAFF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
