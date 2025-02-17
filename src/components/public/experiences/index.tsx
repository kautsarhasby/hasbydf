import { experienceData } from "@/lib/constants";
import { BriefcaseBusiness } from "lucide-react";
import CardExp from "./card";

export default function Experiences() {
  return (
    <main className="flex items-center justify-center">
      <section className="flex flex-col items-center   mb-3 w-[95%] ">
        <h2 className="text-black flex gap-2 text-3xl font-bold mb-3">
          <BriefcaseBusiness size={40} />
          Experience
        </h2>
        <div className="flex flex-col gap-2">
          {experienceData.map((exp, i) => (
            <CardExp key={i.toString()} experience={exp} />
          ))}
        </div>
      </section>
    </main>
  );
}
