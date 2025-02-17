import { Search } from "lucide-react";
import React from "react";

import DialogBox from "@/components/public/projects/dialog";
import { getBlobs } from "@/lib/getBlobs";
import { IProject } from "@/lib/types";

export const revalidate = 60;

export default async function Project() {
  const projects = await getBlobs<IProject[]>({ prefix: "projects" });
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-black">
      <section className="w-full text-center font-medium text-white text-3xl">
        <span>Projects</span>
      </section>
      <section className="w-1/4 my-3">
        <div className="w-full relative mb-3 ">
          <Search className="absolute top-2 left-2 text-slate-300" />
          <input
            type="text"
            className="w-full p-2 px-10 rounded-md mb-3 outline-1 outline outline-slate-300"
            placeholder="Search Project"
          />
        </div>
      </section>
      <section className="w-auto flex flex-col md:flex-row gap-4 p-2">
        {projects.map((project, index) => {
          return <DialogBox key={index} project={project} />;
        })}
      </section>
    </main>
  );
}
