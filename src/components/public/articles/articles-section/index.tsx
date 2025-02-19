import React from "react";
import MDXRemote from "@/components/public/articles/mdx/mdx-remote";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getBlobs } from "@/lib/getBlobs";
import { IArticle } from "@/lib/types";
import { generateFormattedDate } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ArticlesSection({ slug }: { slug: string }) {
  const articles = await getBlobs<IArticle[]>({ prefix: "articles" });
  const article = articles.find(
    (article) =>
      article.metadata.title.toLowerCase().split(" ").join("-") === slug
  );
  if (!article) return notFound();
  return (
    <main className="w-full h-full bg-black text-white">
      <article className="max-w-screen-lg mx-auto flex flex-col items-center justify-center py-24 ">
        <div className="flex flex-col w-full pb-4">
          <h1 className="font-bold text-2xl">{article.metadata.title}</h1>
          <section className="items-center divide-x-[1px]  divide-black flex py-2">
            <h5 className="pr-2">{article.metadata.author}</h5>
            <h5 className="pl-2">{article.metadata.readtime}</h5>
          </section>
          <div className="flex justify-between w-full">
            <section className="gap-2 py-2 flex">
              {article.metadata.tags.map((tag) => (
                <Badge key={tag}>#{tag}</Badge>
              ))}
            </section>
            <section>
              Published on {generateFormattedDate(article.metadata.date)}
            </section>
          </div>
        </div>
        <Separator />
        <Image
          alt={article.metadata.title}
          src={article.metadata.image!}
          sizes="100vw"
          width={350}
          height={100}
          className="pt-4"
        />
        <MDXRemote mdx={article} />
      </article>
    </main>
  );
}
