import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { IMetaData } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateFormattedDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    day: "numeric",
    month: "short",
  });
}

export function parseFrontmatter(fileContent: string) {
  const frontMatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontMatterRegex.exec(fileContent);

  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontMatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<IMetaData> = {};

  for (const lines of frontMatterLines) {
    const [key, ...valueArr] = lines.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1");
    Object.assign(metadata, { [key.trim()]: value });
  }

  return { metadata, content };
}
