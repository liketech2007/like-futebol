import { FooterHome } from "@/components/footerHome";
import { HeaderHome1 } from "@/components/headerHome1";
import { filterLigas } from "@/futebol/filterLigas";
import { getVideo } from "@/futebol/getVideo";
import { getJogos } from "@/futebol/getjogos";

async function getData() {
  const ligas = await filterLigas()
  const videos = await getVideo()
  return {
    ligas,
    videos,
  }
  
}

export  default async function App() {
  const data = await getData()

  
  return (
    <>
      <HeaderHome1 />
      <main className="flex justify-center items-center min-h-[70vh]">
        A aplicação ainda não está terminada

        {JSON.stringify(data)}
      </main>
      <FooterHome />
    </>
  )
}
