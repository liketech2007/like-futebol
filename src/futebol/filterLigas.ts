export async function filterLigas() {
    const res = await fetch(`http://api.football-data.org/v4/competitions/`,{
        headers: {
            'X-Auth-Token': `${process.env.NEXT_PUBLIC_APIFOOT}`
          }
    })
    const data = await res.json()

    return data.competitions
}