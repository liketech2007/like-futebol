"use client"
import Link from "next/link"
import png1 from "../assets/png1.png"
import { useQuery, gql } from '@apollo/client';

export function MainHome({ data } : any) {
    const GET_INFO_POST1 = gql`
    query MyQuery {
        posts(last: 15, skip: 5) {
          id
          title
          slug
          img
        }
      }
    `
    const { data:data1 } = useQuery(GET_INFO_POST1)
  
    return (
        <main className="mb-10 flex justify-center items-center md:w-[60%] lg:w-[80%] flex-col gap-16 md:gap-20 ">
            <div className="flex gap-20 flex-col lg:flex-row">
                <h1 className="text-black dark:text-white text-6xl md:text-8xl  p-4">Blog de <br /> Tecnologia</h1>
               <div className="mr-10 m-3">
               <img src={png1.src} alt="imagem de undraw" className="max-w-[100%] md:max-w-[400px]"/>
               </div>
            </div>
            <div  className="m-4 bg-gray-300 dark:bg-[#1E1E1F] dark:text-white rounded-2xl p-8 flex flex-col gap-6">
                <h1 className="text-4xl font-bold">Recentes</h1>
            {
                data && data.map((post:{ img:string, slug:string,title:string,id:string}) => {
                    return (
                       
                        <Link key={post.id} href={`/post/${post.slug}`} className="p-4 flex flex-col md:flex-row border-t-0 border-l-0 border-r-0 border-b border-black dark:border-white gap-4">
                            <img src={post.img} alt={post.title} className="max-w-[200px]" />
                            <p>{post.title}</p>
                        </Link>
                    )
                })
            }
             <Link href="/list-posts" className="self-end dark:bg-white dark:text-button bg-button text-white hover:bg-gray-300 hover:text-button dark:hover:bg-[#1E1E1F] dark:hover:text-white transition-all py-1 px-6 rounded-lg flex justify-center items-center">Ver lista de artigos</Link>
            </div> 

            <div className="flex flex-row justify-center flex-wrap gap-4 p-4">
                {
                    data1 && data1.posts.map((post:{ img:string, slug:string,title:string,id:string}) => {
                        return (
                            <Link key={post.id} href={`/post/${post.slug}`} className=" bg-gray-300 dark:bg-[#1E1E1F] dark:text-white flex flex-col justify-center items-center gap-2 p-4 rounded-lg">
                                <img src={post.img} alt={post.title} className="max-w-[200px]" />
                                <p className="max-w-[200px]">{post.title}</p>
                             </Link>
                        )
                    })
                }
            </div>

            <Link href="/list-posts" className="m-6 self-end dark:bg-white dark:text-button bg-button text-white hover:bg-gray-300 hover:text-button dark:hover:bg-[#1E1E1F] dark:hover:text-white transition-all py-1 px-6 rounded-lg flex justify-center items-center">Ver lista de artigos</Link>
        </main>
    )
}