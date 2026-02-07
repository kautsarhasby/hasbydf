import { cn } from "@/lib/utils";
import { IconBriefcase, IconCalendar, IconLine } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SingleRoleExperience } from "../constant";

export function CardExperience({
  experience,
}: {
  experience: SingleRoleExperience;
}) {
  return (
    <>
      {/* Git commit dot */}
      <div className="absolute left-[0.15rem] md:left-[1.6rem] top-2 w-4 h-4 rounded-full bg-[#00AAFF] shadow-[0_0px_36px_rgba(0,0,0,0.25)] shadow-[#00AAFF]/50 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-black" />
      </div>

      {/* Branch indicator */}
      <div className="absolute left-4 md:left-12 top-4 md:top-3 w-2 md:w-4 h-[2px] bg-[#00AAFF]/50" />

      <div className="relative mb-12 last:mb-0 p">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
          className=" border-[#00AAFF]/30 border-[1px] rounded-xl hover:shadow-[0_0px_18px_rgba(0,0,0,0.25)]  hover:shadow-[#00AAFF]/50"
        >
          <div className="p-4 space-y-4">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <Image
                src={experience.logo}
                alt={experience.company}
                width={96}
                height={96}
                className="w-24 h-24 min-w-24 min-h-24 max-w-24 max-h-24 rounded-xl object-contain shrink-0"
              />
              <div className="flex  font-jetbrains flex-col gap-2 mb-1">
                <span className="text-white text-lg ">{experience.title}</span>
                <span className="text-[#00AAFF] flex gap-2  ">
                  <IconBriefcase /> {experience.company}
                </span>
                <div className="text-muted-foreground items-center   flex gap-2">
                  <IconCalendar />
                  <span>{experience.startDate}</span>
                  <IconLine />
                  <span>{experience.endDate}</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-sm my-4 leading-relaxed">
              {experience.description}
            </p>

            <div className="mb-4">
              <p className="before:content-['//_'] font-mono text-[#00AAFF] text-sm mb-2">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={cn(
                      " border-[#00AAFF]/50 font-mono p-2 items-center justify-center rounded-lg border-2  bg-zinc-900  text-[#00AAFF] transition-all duration-300 ",
                      "hover:shadow-[#00AAFF]/50 hover:shadow-[0_0px_24px_rgba(0,0,0,0.25)] ",
                    )}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="before:content-['//_'] font-mono text-[#00AAFF] text-sm mb-2">
                Soft Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.softSkills.map((soft, i) => (
                  <span
                    key={i}
                    className={cn(
                      " border-muted-foreground/30 text-muted-foreground bg-muted/20 font-mono px-2 items-center justify-center rounded-full border-[1px]  text-sm transition-all duration-300 ",
                      "hover:border-[#00AAFF] hover:text-[#00AAFF]",
                    )}
                  >
                    {soft}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
