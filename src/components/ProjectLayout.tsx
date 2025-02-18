"use client";
import React from "react";
import { Input } from "./ui/input";
import { IProject } from "@/lib/types";
import { Search } from "lucide-react";

interface props {
  items: { metadata: IProject["metadata"]; element: JSX.Element }[];
}

export default function ProjectLayout({ items }: props) {
  const [query, setQuery] = React.useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-black">
      <section className="w-full text-center font-medium text-white text-3xl">
        <span>Projects</span>
      </section>
      <section className="w-1/4 my-3">
        <div className="w-full relative mb-3 ">
          <Search className="absolute top-2 left-2 text-slate-300" />
          <Input
            type="text"
            onChange={handleInputChange}
            className="w-full p-2 px-10 rounded-md mb-3 outline-1 outline outline-slate-300"
            placeholder="Search Project"
          />
        </div>
      </section>
      <section className="w-auto flex flex-col md:flex-row gap-4 p-2">
        {items
          .filter((item) => {
            const data = [item.metadata.title, ...item.metadata.tags]
              .join("")
              .toLowerCase();

            return query.length ? data.includes(query.toLowerCase()) : true;
          })
          .map((item) => item.element)}
      </section>
    </main>
  );
}
