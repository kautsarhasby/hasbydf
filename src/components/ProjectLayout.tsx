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
    <main className="w-full min-h-screen flex  items-center justify-center bg-black">
      <div className="container flex flex-col items-center justify-center py-14">
        <section className="w-full text-center font-medium text-white text-3xl">
          <span>Projects</span>
        </section>
        <section className="md:w-ful w-[95%] my-3">
          <div className="w-full relative mb-3 ">
            <Search className="absolute top-2 left-2 text-slate-300" />
            <Input
              type="text"
              onChange={handleInputChange}
              className="w-full p-2 px-10  mb-3 text-white bg-black"
              placeholder="Search Project"
            />
          </div>
        </section>
        <section className="w-auto justify-center flex flex-col flex-wrap md:flex-row gap-4 p-2">
          {items
            .filter((item) => {
              const data = [item.metadata.title, ...item.metadata.tags]
                .join("")
                .toLowerCase();

              return query.length ? data.includes(query.toLowerCase()) : true;
            })
            .map((item) => item.element)}
        </section>
      </div>
    </main>
  );
}
