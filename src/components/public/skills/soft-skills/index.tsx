import { cn } from "@/lib/utils";
import { softSkills } from "./constant";

export function SoftSkills() {
  return (
    <div className="   p-2 flex  flex-col container flex-wrap justify-center text-white transition-all">
      <h3 className="before:content-['//_'] text-[#00AAFF] font-mono font-bold mb-6 text-xl">
        <span className="text-white">soft_skills</span>
      </h3>
      <div className="grid grid-cols-5 gap-4 grid-rows-2">
        {softSkills.map((item, index) => {
          return (
            <div
              key={index}
              className={cn(
                "p-3 h-36 border-[#00AAFF]/30 flex gap-4 items-center justify-center rounded-xl border-2  bg-zinc-900  text-[#00AAFF] transition-all duration-300 ",
                "hover:shadow-[#00AAFF]/50 hover:shadow-[0_0px_24px_rgba(0,0,0,0.25)] ",
              )}
            >
              <item.icon size={50} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
