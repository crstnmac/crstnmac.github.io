import "./mdx.css";

import { allBlogs } from ".contentlayer/generated";
import { MDXComponents, Picture } from "components";
import { notFound } from "next/navigation";
import { Martian_Mono } from "@next/font/google";
import { shimmer, toBase64 } from "lib";
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
    <div>
      <article>
        <div> {post.title}</div>
        <Picture
          src={post.cover_image}
          width={1200}
          height={630}
          className="my-8 h-[280px] w-full rounded-md border border-gray-300 object-cover object-center animate-in fade-in duration-500 md:h-[500px]"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(1200, 630)
          )}`}
          priority
          alt={post.title}
        />
        <MDXComponents code={post.body.code} />
      </article>
    </div>
  );
}
