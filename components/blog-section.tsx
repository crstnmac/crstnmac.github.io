import { formatDate, shimmer, toBase64 } from "lib";
import { Blog } from "contentlayer/generated";
import { Box, Picture, Link } from "components";

export default function BlogSection({ posts }: { posts: Blog[] }) {
  return (
    <Box
      as="section"
      className="group animate-in fade-in duration-500 mx-0"
      fullSize
    >
      {posts.length > 1 ? (
        <span className="font-mono text-sm font-semibold lowercase">
          scroll &rarr;
        </span>
      ) : undefined}
      <div className="flex flex-row items-start justify-start space-x-6 overflow-x-auto pb-8">
        {posts?.length ? (
          <>
            {posts.map((b) => (
              <div
                key={b._id}
                className="relative group p-2 w-full sm:w-[330px] flex-none rounded-2xl bg-black-200 dark:bg-black-800 transition duration-700 ease-in-out overflow-hidden"
              >
                <div className="background-noisy pointer-events-none absolute inset-0 z-10 rounded-xl md:rounded-2xl lg:rounded-3xl"></div>
                <Link
                  href={`/blogs/${b.slugAsParams}`}
                  className=" group flex flex-col "
                >
                  <div className="h-[200px] w-full overflow-clip rounded-2xl">
                    <Picture
                      src={b.cover_image}
                      alt={b.title}
                      width={330}
                      height={200}
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(330, 200)
                      )}`}
                      className="group-hover:blog-scale h-full w-full object-cover object-center rounded-2xl"
                      priority
                    />
                  </div>

                  <div className="flex flex-col items-start justify-between b-4">
                    <div className="flex flex-col">
                      <span className="text-sm italic">
                        {formatDate(b.date)}
                      </span>
                      <h2 className="h3 mt-1 inline font-bold leading-8 dark:group-hover:text-black-50 dark:text-black-300 text-slate-700 group-hover:text-slate-900 transition duration-700 ease-in-out">
                        {b.title}
                      </h2>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <b className="text-sm lowercase text-gray-500">
                        {b.readingTime.text}
                      </b>
                      {b.tags?.length ? (
                        <div className="space-x-1">
                          {b.tags.map((t, index) => (
                            <span
                              key={index}
                              className="inline-flex text-xs font-normal uppercase tracking-wider before:content-['#'] after:ml-1 after:content-['•'] last:after:content-none"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>

                </Link>

              </div>
            ))}
          </>
        ) : (
          <b>No posts found</b>
        )}
      </div>
    </Box>
  );
}
