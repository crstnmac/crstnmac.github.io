import "./mdx.css";

import { allSnippets } from ".contentlayer/generated";
import { MDXComponents, Box } from "components";
import { notFound } from "next/navigation";
interface ISingleSinppet {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams(): Promise<
  ISingleSinppet["params"][]
> {
  return allSnippets.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default function SingleBlogPost({ params }: ISingleSinppet) {
  const slug = params?.slug?.join("/");
  const snippet = allSnippets.find((p) => p.slugAsParams === slug);

  if (!snippet) {
    notFound();
  }
  return (
    <Box as="section">
      <article>
        <MDXComponents code={snippet.body.code} />
      </article>
    </Box>
  );
}
