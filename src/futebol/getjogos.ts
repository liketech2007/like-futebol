export const formatDate = (date:any) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

export async function getJogos(id:number) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const yesterdayFormatted = formatDate(yesterday)
    const tomorrowFormatted = formatDate(tomorrow)


    const res = await fetch(`http://api.football-data.org/v4/competitions/${id}/matches?dateFrom=${yesterdayFormatted}&dateTo=${tomorrowFormatted}`,{
        headers: {
            'X-Auth-Token': `${process.env.NEXT_PUBLIC_APIFOOT}`,
          }
    })
    const data = await res.json()

    return data
}
