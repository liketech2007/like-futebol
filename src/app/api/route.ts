import fs from 'fs';
import { NextResponse } from "next/server";

export async function GET(request: Request) {
const form = JSON.stringify({
    query:`
    query MyQuery {
        posts(last: 100) {
          id
          title
          slug
          img
          date
          description
        }
      }     
    ` 
   })
const res1 = await fetch(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,{
    method: "POST",
    body: form
  })
  const data = await res1.json()
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
  <loc>https://like-blog.vercel.app/</loc>
  <lastmod>2023-05-17</lastmod>
</url>

<url>
  <loc>https://like-blog.vercel.app/home</loc>
  <lastmod>2023-05-17</lastmod>
</url>

<url>
  <loc>https://like-blog.vercel.app/sobre-nos</loc>
  <lastmod>2023-05-17</lastmod>
</url>
<url>
  <loc>https://like-blog.vercel.app/politica-de-privacidade</loc>
  <lastmod>2023-05-17</lastmod>
</url>
<url>
  <loc>https://like-blog.vercel.app/list-posts</loc>
  <lastmod>2023-05-17</lastmod>
</url>
<url>
  <loc>https://like-blog.vercel.app/contscte-nos</loc>
  <lastmod>2023-05-17</lastmod>
</url>
  ${data.data.posts
    .map(
      (data:any) => `<url>
        <loc>https://like-blog.vercel.app/post/${data.slug}</loc>
        <lastmod>${data.date}</lastmod>
      </url>`,
    ).join('')}
  </urlset>
`
fs.writeFile("./public/sitemap.xml", xml , (error) => {
  if(error) throw error; 
})
const feed = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"
xmlns:content="http://purl.org/rss/1.0/modules/content/"
xmlns:wfw="http://wellformedweb.org/CommentAPI/"
xmlns:dc="http://purl.org/dc/elements/1.1/"
xmlns:atom="http://www.w3.org/2005/Atom"
xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
>
<channel>
<title>Link blog</title>
<atom:link href="https://like-blog.vercel.app/feed/" rel="self" type="application/rss+xml" />
<link>https://like-blog.vercel.app</link>
<description>Blog de Tecnologia</description>
<lastBuildDate>2023-05-17</lastBuildDate>
<image>
<url>https://like-blog.vercel.app/_next/static/media/logo.32e6ed5b.png</url>
<title>Like Blog</title>
<link>https://like-blog.vercel.app</link>
<width>32</width>
<height>32</height>
</image>${data.data.posts
  .map(
    (data:any) => `
      <item>
      <title>${data.title}</title>
      <link>https://like-blog.vercel.app/post/${data.slug}</link>
      <pubDate>${data.date}</pubDate>
      <description>${data.description}</description>
      </item>
      `,
).join('')}
</channel>
</rss>`
fs.writeFile("./public/rss.xml", feed , (error) => {
  if(error) throw error; 
})

return NextResponse.json({ text: "OK"})
}
