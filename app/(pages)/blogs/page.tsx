"use client";
import { Box, AboutMe, Link } from "components";
import { useCallback, useEffect, useState } from "react";

async function getMediumBlogData() {
  const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@devcriston');

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}


export default async function BlogIndexPage() {

  const [posts, setPosts] = useState<{ items: any }>({ items: [] })

  const mediumPosts = useCallback(async () => {
    const data = await getMediumBlogData()
    setPosts(data)
  }, [])

  useEffect(() => {
    mediumPosts()
  }, [mediumPosts])


  return (
    <Box as="section" className="h-full flex flex-col justify-between">
      {/* <BlogSection posts={posts} /> */}
      {
        posts && posts.items && posts.items.map((post: any, index: number) => {
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
