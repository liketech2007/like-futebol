import { FooterHome } from "@/components/footerHome";
import { HeaderHome } from "@/components/headerHome";
import { MainHome } from "@/components/mainHome";

async function getData() {
    const form = JSON.stringify({
        query:`
        query MyQuery {
            posts(last: 5) {
              id
              title
              slug
              img
            }
          }     
        ` 
       })

    const res = await fetch(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,{
        method: "POST",
        body: form
      })
      const data = await res.json()
      return data.data.posts
    
}

export default async function Home() {
    const data = await getData()
    return (
        <>
            <HeaderHome />
            <MainHome data={data} />
            <FooterHome />
        </>
    )
}