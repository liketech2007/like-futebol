"use client"
import { dateFormat } from "@/utils/dateFormat"
import { SpinnerGap } from "@phosphor-icons/react"
import { useState } from "react"
export function MAinApp(data:any) {
    const [ligaSelect,setLigaSelect] = useState(data.data.ligas[0].id)
    const [load,setLoad] = useState(false)
    const [trocaLiga,setTrocaLiga] = useState(false)
    const [jogos,setJogos] = useState({
        jogos: [],
        text: ""
    })
    const ligaCheck = data.data.ligas.find((liga:any) => {
        return liga.id === ligaSelect
    })

    return (
        <main className="p-4 flex flex-col gap-8 justify-center items-center md:w-[60%] lg:w-[80%] min-h-[70vh] ">
            <div className="flex justify-center items-center flex-col gap-4">
                <h2 className="text-2xl mb-8 font-bold self-start">Ligas</h2>
                <div className="max-w-[300px] md:max-w-[600px] lg:max-w-full snap-mandatory snap-x overflow-x-scroll flex gap-6 md:gap-12">
                    {
                        data.data.ligas.map((liga:any) => {
                            return (
                                <div key={liga.id} className={`flex justify-center items-center flex-col gap-2 max-w-[50px] ${ligaSelect === liga.id ? "border-button border-t-0 border-l-0 border-r-0 border-b-2 drop-shadow-lg" : ""}`} onClick={async() => {
                                    setLoad(true)
                                    setJogos({
                                            jogos: [],
                                            text: ""
                                        })
                                    setLigaSelect(liga.id)
                                    setTrocaLiga(true)
                                    const res = await fetch(`https://like-futebol.vercel.app/jogos?id=${liga.id}`,{
                                        method: "POST",
                                    })
                                    const data = await res.json()
                                    setJogos(data)
                                    setLoad(false)
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
                                <div className="m-6 text-xs md:text-base bg-gray-300 dark:bg-[#1E1E1F] dark:text-white p-4 rounded-lg">
                                    <div className="flex justify-between bg-white dark:bg-secondary rounded-lg">
                                        <div className=" w-1/5 text-center p-4">Casa</div>
                                        <div className=" w-1/5 text-center p-4">Fora</div>
                                        <div className=" w-1/5 text-center p-4">Golos</div>
                                        <div className=" w-1/5 text-center p-4">Data</div>
                                        <div className="w-1/5 text-center p-4">Estado</div>
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
                            ) : load === true ? (
                                <div className="flex justify-center items-center min-h-[60vh]">
                                    <SpinnerGap size={48} className="animate-spin" />
                              </div>
                            ) : jogos.text === "Não tem Jogos" && jogos.jogos === null ? <div className="flex justify-center items-center min-h-[60vh]">Não tem Jogos</div> : (
                                <div className="m-6 text-xs md:text-base  bg-gray-300 dark:bg-[#1E1E1F] dark:text-white p-4 rounded-lg">
                                <div className="flex justify-between  bg-white dark:bg-secondary rounded-lg">
                                    <div className=" w-1/5 text-center p-4">Casa</div>
                                    <div className=" w-1/5 text-center p-4">Fora</div>
                                    <div className=" w-1/5 text-center p-4">Golos</div>
                                    <div className=" w-1/5 text-center p-4">Date</div>
                                    <div className=" w-1/5 text-center p-4">Estado</div>
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
                <h2 className="text-2xl font-bold my-8">Melhores Golos</h2>
                <div className="flex flex-wrap justify-center items-ceenter gap-6 md:gap-12">
                {
                    data.data.videos.map((video:any) => {
                       
                    if(video === null) {
                        return null
                    }else {
                        return (
                            <div key={video.embed} className="p-4 flex flex-col gap-6 min-w-[70%] border-button border-t-0 border-l-0 border-r-0 border-b-2 drop-shadow-lg">
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
