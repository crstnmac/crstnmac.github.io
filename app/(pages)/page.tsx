import { BlogSection } from "components";
import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export default function Home() {
  const posts = allBlogs
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  return <BlogSection posts={posts} />;
}
