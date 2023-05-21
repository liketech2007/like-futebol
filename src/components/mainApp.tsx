"use client"
import { getJogos } from "@/futebol/getjogos"
import { dateFormat } from "@/utils/dateFormat"
import { SpinnerGap } from "@phosphor-icons/react"
import { useState } from "react"
export function MAinApp(data:any) {
    const [ligaSelect,setLigaSelect] = useState(data.data.ligas[0].id)
    const [trocaLiga,setTrocaLiga] = useState(false)
    const [jogos,setJogos] = useState({
        jogos: false,
        text: ""
    })
    const ligaCheck = data.data.ligas.find((liga:any) => {
        return liga.id === ligaSelect
    })

    return (
        <main className="p-4 flex flex-col gap-8 justify-center md:w-[60%] lg:w-[80%] min-h-[70vh] ">
            <div>
                <h2 className="text-2xl mb-8 font-bold">Ligas</h2>
                <div className="max-w-[300px] md:max-w-[600px] lg:max-w-full snap-mandatory snap-x overflow-x-scroll flex gap-6 md:gap-12">
                    {
                        data.data.ligas.map((liga:any) => {
                            return (
                                <div key={liga.id} className={`flex justify-center items-center flex-col gap-2 max-w-[50px] ${ligaSelect === liga.id ? "border-red-400 border-t-0 border-l-0 border-r-0 border-b-2 drop-shadow-lg" : ""}`} onClick={async() => {
                                    setJogos({
                                            jogos: false,
                                            text: ""
                                        })
                                    setLigaSelect(liga.id)
                                    setTrocaLiga(true)
                                    const res = await fetch(`http://localhost:3000/jogos?id=${liga.id}`,{
                                        method: "POST",
                                    })
                                    const data = await res.json()
                                    setJogos(data)
                                }}>
                                    <img src={liga.emblem} alt={liga.name} className="w-full"/>
                                    <div className="text-xs text-transparent">{liga.name}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <h2 className="text-2xl font-bold pt-4">{ligaCheck.name}</h2>

                    <div>
                        {
                            trocaLiga === false ? (
                                <div className="border border-secondary my-6 text-xs md:text-base">
                                    <div className="flex justify-between">
                                        <div className="border-t-0 border-r-2 border-black border-b-2 border-l-0 w-1/5 text-center">Casa</div>
                                        <div className="border-t-0 border-r-2 border-black border-b-2 border-l-0 w-1/5 text-center">Fora</div>
                                        <div className="border-t-0 border-r-2 border-black border-b-2 border-l-0 w-1/5 text-center">Golos</div>
                                        <div className="border-t-0 border-r-2 border-black border-b-2 border-l-0 w-1/5 text-center">Data</div>
                                        <div className="border-t-0 border-r-2 border-black border-b-2 border-l-0 w-1/5 text-center">Estado</div>
                                    </div>
                                    {
                                        data.data.jogos.matches.length === 0 ? <div className="flex justify-center items-center min-h-[60vh]">Não tem Jogos</div> : data.data.jogos.matches.map((jogo:any) => {
                                            return (
                                                <div key={jogo.id} className="flex justify-between">
                                                    <div className="w-1/5 text-center p-3">{jogo.homeTeam.name}</div>
                                                    <div className="w-1/5 text-center p-3">{jogo.awayTeam.name}</div>
                                                    <div className="w-1/5 text-center p-3">{`${jogo.score.fullTime.home === null ? 0 : jogo.score.fullTime.home} - ${jogo.score.fullTime.away === null ? 0 : jogo.score.fullTime.away}`}</div>
                                                    <div className="w-1/5 text-center p-3">{dateFormat(jogo.utcDate)}</div>
                                                    <div className="w-1/5 text-center p-3">{jogo.status === "FINISHED" ? "Terminou" : jogo.status === "TIMED" ? "Por jogar" : "Jogando"}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            ) : jogos.jogos === false ? (
                                <div className="flex justify-center items-center min-h-[60vh]">
                                    <SpinnerGap size={48} className="animate-spin" />
                              </div>
                            ) : jogos.text === "Não tem Jogos" && jogos.jogos === null ? <div className="flex justify-center items-center min-h-[60vh]">Não tem Jogos</div> : (
                                <div className="border border-secondary my-6 text-xs md:text-base">
                                <div className="flex justify-between">
                                    <div className="border-t-0 border-r-2 border-black border-b-2 border-l-0 w-1/5 text-center">Casa</div>
                                    <div className="border-t-0 border-r-2 border-black border-b-2 border-l-0 w-1/5 text-center">Fora</div>
                                    <div className="border-t-0 border-r-2 border-black border-b-2 border-l-0 w-1/5 text-center">Golos</div>
                                    <div className="border-t-0 border-r-2 border-black border-b-2 border-l-0 w-1/5 text-center">Date</div>
                                    <div className="border-t-0 border-r-2 border-black border-b-2 border-l-0 w-1/5 text-center">Tempo</div>
                                </div>
                                    {
                                        jogos.jogos.map((jogo:any) => {
                                            return  (
                                                <div key={jogo.id} className="flex justify-between">
                                                    <div className="w-1/5 text-center p-3">{jogo.homeTeam.name}</div>
                                                    <div className="w-1/5 text-center p-3">{jogo.awayTeam.name}</div>
                                                    <div className="w-1/5 text-center p-3">{`${jogo.score.fullTime.home === null ? 0 : jogo.score.fullTime.home} - ${jogo.score.fullTime.away === null ? 0 : jogo.score.fullTime.away}`}</div>
                                                    <div className="w-1/5 text-center p-3">{dateFormat(jogo.utcDate)}</div>
                                                    <div className="w-1/5 text-center p-3">{jogo.status === "FINISHED" ? "Terminou" : jogo.status === "TIMED" ? "Por jogar" : "Jogando"}</div>
                                                </div>
                                            )
                                        })
                                    }
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold my-8">Melhores Gols</h2>
                <div className="flex flex-wrap gap-6">
                {
                    data.data.videos.map((video:any) => {
                       
                    if(video === null) {
                        return null
                    }else {
                        return (
                            <div key={video.embed} className="flex flex-col gap-6 min-w-full">
                                <h1 className="text-xl font-bold">{video.title}</h1>
                                <div dangerouslySetInnerHTML={{ __html: video.embed }}></div>
                                <div className="text-xs font-tin">{dateFormat(video.date)}</div>
                            </div>
                        )
                    }
                    })
                }
               </div> 
            </div>
        </main>
    )
}