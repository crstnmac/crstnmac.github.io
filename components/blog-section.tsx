import { Blog } from ".contentlayer/generated";
import Link from "next/link";

export default function BlogSection({ posts }: { posts: Blog[] }) {
  return (
    <div className="flex flex-row items-start justify-start space-x-6 overflow-x-auto pb-8">
      {posts?.length ? (
        <>
          {posts.map((p) => (
            <div key={p._id}>
              <Link href={`/blogs/${p.slugAsParams}`}>{p.title}</Link>
            </div>
          ))}
        </>
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}
