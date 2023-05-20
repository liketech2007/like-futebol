export async function filterLigas() {
    const res = await fetch(`http://api.football-data.org/v4/competitions/`,{
        headers: {
            'X-Auth-Token': "5cc4793ffe8046ec901e7b7695a480a0"
          }
    })
    const data = await res.json()

    return data.competitions
}