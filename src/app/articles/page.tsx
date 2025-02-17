import { LongCard, ShortCard } from "@/components/public/articles";
import { DefaultMetadata } from "@/lib/constants";
import { getBlobs } from "@/lib/getBlobs";
import { IArticle } from "@/lib/types";
import { Separator } from "@radix-ui/react-separator";
import { Metadata } from "next";

export const revalidate = 60;

export default async function Articles() {
  const articles = await getBlobs<IArticle[]>({ prefix: "articles" });

  return (
    <main className="pt-20 w-full min-h-screen bg-black flex flex-col items-center justify-center">
      <div className=" py-4 ">
        <h1 className="text-white font-bold text-4xl">Articles</h1>
      </div>
      <div className="pb-8">
        <span className="text-xl text-white font-extralight">
          Latest Article
        </span>
      </div>
      <section className="w-full flex flex-col items-center justify-center gap-4">
        <div className="hidden md:flex w-full justify-center">
          {articles
            .sort((a, b) => {
              const dateA = new Date(a.metadata.date);
              const dateB = new Date(b.metadata.date);

              return dateB.getTime() - dateA.getTime();
            })
            .map((article: IArticle, index) => {
              if (index === 0) {
                return (
                  <LongCard
                    key={index}
                    article={article}
                    link={`articles/${article.metadata.title
                      .toLowerCase()
                      .split(" ")
                      .join("-")}`}
                  />
                );
              }
            })}
        </div>
        <div className="flex md:hidden w-full">
          {articles
            .sort((a, b) => {
              const dateA = new Date(a.metadata.date);
              const dateB = new Date(b.metadata.date);

              return dateB.getTime() - dateA.getTime();
            })
            .map((article: IArticle, index) => {
              if (index === 0) {
                return (
                  <ShortCard
                    key={index}
                    article={article}
                    link={`articles/${article.metadata.title
                      .toLowerCase()
                      .split(" ")
                      .join("-")}`}
                  />
                );
              }
            })}
        </div>
        <div className="">
          <Separator color="slate" />
          <span className="font-extralight text-white text-xl">
            All Articles
          </span>
        </div>
        <div className="md:flex-row flex-col flex gap-4 w-full md:px-10">
          {articles
            .sort((a, b) => {
              const dateA = new Date(a.metadata.date);
              const dateB = new Date(b.metadata.date);

              return dateB.getTime() - dateA.getTime();
            })
            .map((article: IArticle, index) => {
              if (index !== 0) {
                return (
                  <ShortCard
                    key={index}
                    article={article}
                    link={`articles/${article.metadata.title
                      .toLowerCase()
                      .split(" ")
                      .join("-")}`}
                  />
                );
              }
            })}
        </div>
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Articles",
  openGraph: {
    ...DefaultMetadata.openGraph,
    url: `${DefaultMetadata}/articles`,
  },
};
