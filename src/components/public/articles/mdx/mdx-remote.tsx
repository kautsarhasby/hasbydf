import React from "react";
import {
  MDXRemoteProps,
  MDXRemote as MDXRemotePrimitive,
} from "next-mdx-remote/rsc";
import { IArticle } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";

interface props {
  mdx: IArticle;
}

export default function MDXRemote({ mdx }: props) {
  const props: MDXRemoteProps = {
    source: mdx.content,
    components: {
      a: (props) => (
        <Link
          href={props.href!}
          target="_blank"
          {...props}
          style={{ color: "white" }}
        />
      ),
      p: ({ children }) => <p style={{ color: "#e5e5e5" }}>{children}</p>,
      h2: ({ children }) => <h2 style={{ color: "white" }}>{children}</h2>,
      strong: ({ children }) => (
        <strong style={{ color: "white" }}>{children}</strong>
      ),
      li: ({ children }) => <li style={{ color: "white" }}>{children}</li>,
      Cover: () => (
        <Image
          src={mdx.metadata.image!}
          alt={mdx.metadata.title}
          sizes="100vw"
          width={400}
          height={225}
          priority
          className="my-0 aspect-video h-auto w-full rounded-xl border-1"
        />
      ),
    },
  };

  return (
    <div className="prose prose-zinc max-w-none">
      <MDXRemotePrimitive {...props} />
    </div>
  );
}
