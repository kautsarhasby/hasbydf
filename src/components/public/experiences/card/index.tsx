import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { IExperience } from "@/lib/types";
import { User, CircleFadingArrowUp } from "lucide-react";
import Image from "next/image";
import React from "react";

interface props {
  experience: IExperience;
}

export default function CardExp({ experience }: props) {
  return (
    <Card className="max-w-2xl shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center text-base md:text-lg justify-between">
          {experience.name}{" "}
          <Image
            src={experience.icon}
            alt="lepkom"
            sizes="20"
            width={40}
            height={20}
            style={{ objectFit: "cover" }}
          />
        </CardTitle>
        <CardDescription>
          {experience.startYear} - {experience.endYear}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-1 text-sm">
          <User size={15} />
          Position : <span className="font-normal">{experience.position}</span>
        </div>
      </CardContent>
      <CardFooter className="flex items-start flex-col gap-4">
        <div className="flex text-wrap items-center gap-1 text-sm">
          Soft Skills :{" "}
          <section className="flex-wrap flex gap-2">
            {experience.softSkills?.map((skill, i) => (
              <Badge key={i.toString()}>{skill}</Badge>
            ))}
          </section>
        </div>
        <div className="flex text-wrap items-center gap-1 text-sm">
          Hard Skills :{" "}
          <section className="flex-wrap flex gap-2">
            {experience.hardSkills?.map((skill, i) => (
              <Badge key={i.toString()} className="flex justify-center">
                {skill}
              </Badge>
            ))}
          </section>
        </div>
      </CardFooter>
    </Card>
  );
}
