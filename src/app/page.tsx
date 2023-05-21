import { FooterHome } from "@/components/footerHome";
import { HeaderHome1 } from "@/components/headerHome1";
import { filterLigas } from "@/futebol/filterLigas";
import { getVideo } from "@/futebol/getVideo";
import { getJogos } from "@/futebol/getjogos";
import { MAinApp } from "../components/mainApp";

async function getData() {
  const ligas = await filterLigas()
  const videos = await getVideo()
  const jogos = await getJogos(ligas[0].id)
  return {
    ligas,
    videos,
    jogos,
  }
  
}

export  default async function App() {
  const data = await getData()
  return (
    <>
      <HeaderHome1 />
        <MAinApp data={data}/>      
      <FooterHome />
    </>
  )
}
