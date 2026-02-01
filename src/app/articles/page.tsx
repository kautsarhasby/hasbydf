// import { LongCard, ShortCard } from "@/components/public/articles";
import { DefaultMetadata } from "@/lib/constants";
// import { getBlobs } from "@/lib/getBlobs";
// import { IArticle } from "@/lib/types";
// import { Separator } from "@radix-ui/react-separator";
import { Metadata } from "next";

export const revalidate = 60;

export default async function Articles() {
  // const articles = await getBlobs<IArticle[]>({ prefix: "articles" });

  return (
    <main className="pt-20 w-full min-h-screen bg-black flex flex-col items-center justify-center">
      <h2 className="font-bold font-jetbrains text-4xl">Coming soon...</h2>
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
