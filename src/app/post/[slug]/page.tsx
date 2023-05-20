import { FooterHome } from "@/components/footerHome";
import { HeaderHome } from "@/components/headerHome";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import React from "react"
import "./post.css"
import { CardPost } from "@/components/cardPost";
import { Indexe } from "@/indexe/route";



async function getData(slug: string) {
    Indexe(`https://like-blog.vercel.app/${slug}`)
    await fetch("https://like-blog.vercel.app/api")
    const form = JSON.stringify({
        query:`
        query MyQuery {
            post(where: {slug:"${slug}"}) {
              title
              content
              date
              img
              tags
              description
            }
          }
          
        ` 
       })

    const res = await fetch(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,{
        method: "POST",
        body: form
      })
      const data = await res.json()
      return data.data.post
    
}
export default async function Post({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug);

    const content = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeReact, { createElement: React.createElement })
    .processSync(data.content).result;
 
    return (
        <>
        <head>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.tags} />
            <title>{data.title}</title>
        </head>
            <HeaderHome />
            <main className="p-8 min-h-[70vh] md:w-[50%] lg:w-[70%] flex-col">
                <div className="flex flex-col gap-8">
                    <h1 className="text-3xl font-bold">{data.title}</h1>
                    <img src={data.img} className="w-full" alt={data.title}/>
                    <p>{data.date}</p>
                    <div className="post">
                        {content}
                    </div>
                </div>
               <div>
                <h1 className="my-8 text-2xl font-bold">Recentes</h1>
               <CardPost slug={params.slug}/>
               </div>
            </main>
            <FooterHome />
        </>
    )
}