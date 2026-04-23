import React from "react";
import { projects } from "@/components/public/projects/constant";
import ProjectPage from "@/components/public/projects";

export const revalidate = 60;

export default async function Project() {
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.date || "").getTime();
    const dateB = new Date(b.date || "").getTime();
    return dateB - dateA;
  });

  return <ProjectPage items={sortedProjects} />;
}
