import { formatDate } from "@/futebol/getjogos";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const yesterdayFormatted = formatDate(yesterday)
    const tomorrowFormatted = formatDate(tomorrow)

    const url = new URL(`${request.url}`)
    const id = url.searchParams.get('id');

    const res = await fetch(`http://api.football-data.org/v4/competitions/${id}/matches?dateFrom=${yesterdayFormatted}&dateTo=${tomorrowFormatted}`,{
        headers: {
            'X-Auth-Token': "5cc4793ffe8046ec901e7b7695a480a0",
          }
    })
    const data = await res.json()


    return data.matches.length === 0 ? NextResponse.json({ text: "Não tem Jogos", jogos: null}) : NextResponse.json({ text: "", jogos: data.matches})

}