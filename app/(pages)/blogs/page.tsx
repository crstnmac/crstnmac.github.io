import { Box, AboutMe, Link } from "components";

async function getMediumBlogData() {
  const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@devcriston');

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}


export default async function BlogIndexPage() {

  const mediumPosts = await getMediumBlogData();


  return (
    <Box as="section" className="h-full flex flex-col justify-between">
      {/* <BlogSection posts={posts} /> */}
      {
        mediumPosts && mediumPosts.items !== null && mediumPosts.items.map((post: any, index: number) => {
          return (
            <ol key={index}>
              <li>
                <Link href={post.link} animatedUnderline>
                  {post.title}
                </Link>
              </li>
            </ol>
          )
        })
      }
      <Box fullSize className="mt-auto mb-0 mx-0">
        <AboutMe />
      </Box>
    </Box>
  );
}
