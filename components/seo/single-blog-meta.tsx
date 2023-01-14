import { allBlogs } from "contentlayer/generated";

interface ISingleBlogMeta {
  params: {
    slug?: string[];
  };
}

export default function SingleBlogMeta({ params }: ISingleBlogMeta) {
  const slug = params?.slug?.join("/") || "";
  const post = allBlogs.find((post: any) => post.slugAsParams === slug);

  if (!post) {
    return null;
  }

  const title = `${post.title} » crstnmac.github.io`;
  const url = process.env.NEXT_PUBLIC_APP_URL;
  return (
    <>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={post.description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={post.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${url}/blogs/${post.slugAsParams}`} />
      <meta
        property="og:image"
        content={`${url}${post.og_image}` || post.cover_image}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content="summary_large_card" />
      <meta name="twitter:site" content="@devcriston" />
      <meta name="twitter:description" content={post.description} />
      <meta
        name="twitter:image"
        content={`${url}${post.og_image}` || post.cover_image}
      />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="https://crstnmac.github.io/favicons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://crstnmac.github.io/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://crstnmac.github.io/favicons/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://crstnmac.github.io/favicons/favicon-32x32.png"
      />
      <link
        rel="manifest"
        href="https://crstnmac.github.io/favicons/site.webmanifest"
      />
      <link rel="canonical" href={`${url}/blogs/${post.slugAsParams}`} />
    </>
  );
}
