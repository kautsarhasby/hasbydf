import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { IArticle } from "@/lib/types";
import { generateFormattedDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface props {
  article: IArticle;
  link: string;
}

export default function LongCard({ article, link }: props) {
  return (
    <Link
      href={link}
      className="w-[90%] flex h-[450px] md:hover:scale-105 transition-all
    "
    >
      <Card className="flex w-full text-white bg-slate-950 border-slate-800 border">
        <CardHeader className="w-[920px] h-full relative ">
          <Image
            src={article.metadata.image!}
            alt="articles"
            fill
            style={{ objectFit: "cover" }}
            className="absolute rounded-md"
          />
        </CardHeader>
        <CardContent className="w-full">
          <section className="flex  flex-col h-full p-2">
            <div className="flex items-center gap-2 py-2  text-sm">
              <div className="flex items-center gap-2">
                <div className="rounded-full h-4 w-4 bg-orange-400"></div>
                <p className="">{article.metadata.author}</p>
              </div>
              <span>&#8226;</span>
              <span className="">{article.metadata.readtime}</span>
            </div>
            <div className="text-4xl py-4 font-bold">
              {article.metadata.title}
            </div>
            <div className="flex-1 py-4">{article.metadata.description}</div>
            <div className="flex gap-2 justify-between">
              <section className="flex gap-2 flex-wrap">
                {article.metadata.tags
                  .sort((a, b) => a.length - b.length)
                  .map((tag, index) => (
                    <Badge key={index} className="bg-blue-500 text-wrap ">
                      #{tag}
                    </Badge>
                  ))}
              </section>
              <section className="flex items-center ">
                <p>{generateFormattedDate(new Date(article.metadata.date))}</p>
              </section>
            </div>
          </section>
        </CardContent>
      </Card>
    </Link>
  );
}
