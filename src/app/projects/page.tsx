import React from "react";
import { getBlobs } from "@/lib/getBlobs";
import { IProject } from "@/lib/types";
import ProjectLayout from "@/components/ProjectLayout";
import DialogBox from "@/components/public/projects/dialog";

export const revalidate = 60;

export default async function Project() {
  const projects = await getBlobs<IProject[]>({ prefix: "projects" });
  return (
    <ProjectLayout
      items={projects
        .sort((a, b) => {
          const dateA = new Date(a.metadata.date);
          const dateB = new Date(b.metadata.date);

          return dateA.getTime() - dateB.getTime();
        })
        .map((project, i) => ({
          metadata: project.metadata,
          element: <DialogBox key={i} project={project} />,
        }))}
    />
  );
}
