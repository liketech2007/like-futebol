"use client"
import { FooterHome } from "@/components/footerHome";
import { HeaderSecond } from "@/components/headerSecond";
import Link from "next/link";
import { useQuery, gql } from '@apollo/client';
import { SpinnerGap } from "@phosphor-icons/react";

export default function ListPosts() {
    const GET_INFO_POST = gql`
    query MyQuery {
        posts(last: 100) {
          id
          title
          slug
          img
        }
      }      
    `

    const { data,loading } = useQuery(GET_INFO_POST)
    return ( 
        <>
            <HeaderSecond />
            <main className="p-4 min-h-[70vh] md:w-[60%] lg:w-[80%] flex-col">
                <h1 className="text-3xl fonte-bold my-4 ml-6">Artigos</h1>

                <div className="flex flex-row justify-center flex-wrap gap-4 p-4">
                {
                    data && data.posts.map((post:{ img:string, slug:string,title:string,id:string}) => {
                        return (
                            <Link key={post.id} href={`/post/${post.slug}`} className=" bg-gray-300 dark:bg-[#1E1E1F] dark:text-white flex flex-col justify-center items-center gap-2 p-4 rounded-lg">
                                <img src={post.img} alt={post.title} className="max-w-[200px]" />
                                <p className="max-w-[200px]">{post.title}</p>
                             </Link>
                        )
                    })
                }
                {
                    loading && <div className="flex justify-center items-center min-h-[60vh]">
                        <SpinnerGap size={48} className="animate-spin" />
                    </div>
                }
            </div>
            </main>
            <FooterHome />
        </>
    )
}