"use client"
import { gql, useQuery } from "@apollo/client"
import Link from "next/link"

export function CardPost({ slug }: any) {
    const GET_INFO_POST = gql`
    query MyQuery {
        posts(last: 10) {
          id
          title
          slug
          img
        }
      }
    `
    const { data } = useQuery(GET_INFO_POST)
    return (
        <>
            <div className="flex flex-row justify-center flex-wrap gap-4 p-4">
                {
                    data && data.posts.map((post:{ img:string, slug:string,title:string,id:string}) => {
                        return post.slug != slug && (
                            <Link key={post.id} href={`/post/${post.slug}`} className=" bg-gray-300 dark:bg-[#1E1E1F] dark:text-white flex flex-col justify-center items-center gap-2 p-4 rounded-lg">
                                <img src={post.img} alt={post.title} className="max-w-[200px]" />
                                <p className="max-w-[200px]">{post.title}</p>
                             </Link>
                        )
                    })
                }
            </div>

            <Link href="/list-posts" className="m-6 self-end dark:bg-white dark:text-button bg-button text-white hover:bg-gray-300 hover:text-button dark:hover:bg-[#1E1E1F] dark:hover:text-white transition-all py-1 px-6 rounded-lg flex justify-center items-center">Ver lista de artigos</Link>
        </>
    )
}