import ArticlesSection from "@/components/public/articles/articles-section";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return <ArticlesSection slug={slug} />;
}
