import "./mdx.css";

import { allBlogs } from ".contentlayer/generated";
import { MDXComponents, Box, BlogHeader } from "components";
import { notFound } from "next/navigation";
import { formatDate } from "lib";
interface ISingleBlogPost {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams(): Promise<
  ISingleBlogPost["params"][]
> {
  return allBlogs.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default function SingleBlogPost({ params }: ISingleBlogPost) {
  const slug = params?.slug?.join("/");
  const post = allBlogs.find((p) => p.slugAsParams === slug);

  if (!post) {
    notFound();
  }
  return (
    <Box as="section">
      <article>
        <BlogHeader
          date={formatDate(post.date)}
          title={post.title}
          imgSrc={post.cover_image}
          imgAlt={post.cover_image}
          readingTime={post.readingTime.text}
        />
        <MDXComponents code={post.body.code} />
      </article>
    </Box>
  );
}
