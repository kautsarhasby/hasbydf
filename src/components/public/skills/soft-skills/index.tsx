"use client";

import { cn } from "@/lib/utils";
import { softSkills } from "./constant";
import { motion } from "framer-motion";

export function SoftSkills() {
  return (
    <div className="   p-2 flex  flex-col container flex-wrap justify-center text-white transition-all">
      <h3 className="before:content-['//_'] text-[#00AAFF] font-mono font-bold mb-6 text-xl">
        <span className="text-white">soft_skills</span>
      </h3>
      <div className="grid md:grid-cols-5 grid-cols-2 gap-4 grid-rows-2">
        {softSkills.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              key={index}
              className={cn(
                "p-3 h-36 border-[#00AAFF]/30 flex gap-4 items-center justify-center rounded-xl border-2  bg-zinc-900  text-[#00AAFF] transition-all duration-300 ",
                "hover:shadow-[#00AAFF]/50 hover:shadow-[0_0px_24px_rgba(0,0,0,0.25)] ",
                "flex flex-col lg:flex-row",
              )}
            >
              <item.icon className="w-8 h-8  md:w-16 md:h-16" />
              <span className="text-sm text-wrap text-center md:text-base font-jetbrains font-bold">
                {item.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
