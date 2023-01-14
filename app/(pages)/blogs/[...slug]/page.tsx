import { allBlogs } from ".contentlayer/generated";
import { MDXComponents } from "components";
import { notFound } from "next/navigation";

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
    <div className="flex flex-col items-center justify-start lg:flex-row lg:items-start lg:justify-between">
      <article>
        <div> {post.title}</div>
        <MDXComponents code={post.body.code} />
      </article>
    </div>
  );
}
