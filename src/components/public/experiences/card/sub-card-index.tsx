import { cn } from "@/lib/utils";
import { IconBriefcase, IconCalendar, IconLine } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MultiRoleExperience } from "../constant";

export function MultiCardExperience({
  experience,
}: {
  experience: MultiRoleExperience;
}) {
  return (
    <>
      {/* Git commit dot */}
      <div className="absolute left-[0.15rem] md:left-[1.6rem] top-2 w-4 h-4 rounded-full bg-[#00AAFF] shadow-[0_0px_36px_rgba(0,0,0,0.25)] shadow-[#00AAFF]/50 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-black" />
      </div>

      {/* Branch indicator */}
      <div className="absolute left-4 md:left-12 top-4 md:top-3 w-2 md:w-4  h-[2px] bg-[#00AAFF]/50" />

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.3 }}
        className=" border-[#00AAFF]/30 border-[1px] rounded-xl hover:shadow-[0_0px_18px_rgba(0,0,0,0.25)]  hover:shadow-[#00AAFF]/50 "
      >
        <div className="p-4 space-y-4">
          <div className="flex md:flex-row flex-col items-start gap-4">
            <Image
              src={experience.logo}
              alt={experience.company}
              width={96}
              height={96}
              className="w-24 h-24 min-w-24 min-h-24 max-w-24 max-h-24 rounded-xl object-contain shrink-0"
            />
            <div className="flex  font-jetbrains flex-col gap-2 mb-1">
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
        </div>
      </motion.div>

      {/* Git Line  */}
      <div className="absolute left-10  md:left-28 top-[14.35rem] md:top-[8.15rem] bottom-0 w-[2px] bg-gradient-to-b from-[#00AAFF] via-[#00AAFF]/50 to-transparent" />
      <div>
        {experience.roles.map((exp) => (
          <div className="mb-12 mt-12 relative" key={exp.title}>
            {/* Git commit dot */}
            <div className="absolute left-[0.55rem] md:left-[1.6rem] top-1 w-4 h-4 rounded-full bg-[#00AAFF] shadow-[0_0px_36px_rgba(0,0,0,0.25)] shadow-[#00AAFF]/50 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-black" />
            </div>

            {/* Branch indicator */}
            <div className="absolute left-6 md:left-12 top-3 w-2 md:w-4 h-[2px] bg-[#00AAFF]/50" />

            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className=" border-[#00AAFF]/30 border-[1px] ml-8 md:ml-16 p-4 rounded-xl hover:shadow-[0_0px_18px_rgba(0,0,0,0.25)]  hover:shadow-[#00AAFF]/50"
            >
              <div className="flex  font-jetbrains flex-col gap-2 mb-1">
                <span className="text-white text-lg ">{exp.title}</span>

                <div className="text-muted-foreground items-center   flex gap-2">
                  <IconCalendar />
                  <span>{exp.startDate}</span>
                  <IconLine />
                  <span>{exp.endDate}</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm my-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-4">
                <p className="before:content-['//_'] font-mono text-[#00AAFF] text-sm mb-2">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
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
                  {exp.softSkills.map((soft, i) => (
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
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
}
