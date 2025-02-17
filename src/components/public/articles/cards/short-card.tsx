import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { IArticle } from "@/lib/types";
import { generateFormattedDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface props {
  article: IArticle;
  link: string;
}

export default async function ShortCard({ article, link }: props) {
  return (
    <Link
      href={link}
      className="w-full h-auto lg:h-[600px] md:hover:scale-105 transition-all
    "
    >
      <Card className="w-full h-full flex flex-col text-white bg-slate-950 border-slate-800 border">
        <CardHeader className="w-full h-48 relative ">
          <Image
            src={article.metadata.image!}
            alt="articles"
            fill
            sizes="auto"
            style={{ objectFit: "cover" }}
            className="absolute rounded-md"
          />
        </CardHeader>
        <CardContent className="p-4">
          <section className="flex items-center gap-2 mb-4 ">
            <div className="flex items-center gap-2">
              <div className="rounded-full h-4 w-4 bg-orange-400"></div>
              <p className="text-xs">{article.metadata.author}</p>
            </div>
            <span className="text-xs">&#8226;</span>
            <section className="flex items-center">
              <p className="text-xs">{article.metadata.readtime}</p>
            </section>
          </section>
          <h1 className="font-bold md:text-2xl text-xl">
            {article.metadata.title}
          </h1>
          <span className="flex-1 text-sm">{article.metadata.description}</span>
        </CardContent>
        <CardFooter className="mt-auto bottom-0 grid">
          <section className="flex flex-col justify-start items-start gap-2 ">
            {article.metadata.tags
              .sort((a, b) => a.length - b.length)
              .map((tag, index) => (
                <Badge key={index} className="bg-blue-500 text-wrap">
                  #{tag}
                </Badge>
              ))}
          </section>
          <section className="py-2 w-full text-end">
            <p className="text-sm font-bold">
              {generateFormattedDate(article.metadata.date)}
            </p>
          </section>
        </CardFooter>
      </Card>
    </Link>
  );
}
