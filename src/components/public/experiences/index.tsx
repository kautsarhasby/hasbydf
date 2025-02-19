import { experienceData } from "@/lib/constants";
import { BriefcaseBusiness } from "lucide-react";
import CardExp from "./card";

export default function Experiences() {
  return (
    <main className="flex items-center justify-center ">
      <section className="flex flex-col justify-center items-center container mb-3">
        <h2 className="text-black flex gap-2 text-3xl font-bold mb-3">
          <BriefcaseBusiness size={40} />
          Experience
        </h2>
        <div className="flex items-center justify-center flex-wrap gap-2 ">
          {experienceData.map((exp, i) => (
            <CardExp key={i.toString()} experience={exp} />
          ))}
        </div>
      </section>
    </main>
  );
}
