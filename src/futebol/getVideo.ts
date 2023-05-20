export async function getVideo() {
    const url = 'https://free-football-soccer-videos.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1d6b1e953amsh954e4455235fafap17d173jsne8e22e8ea6b3',
		'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    const videos = result.map((video:any,indexe:any) => {
        if(indexe <= 10) {
            return video
        }else {
            return null
        }
    })
    return videos
	
} catch (error) {
	console.error(error);
}
}