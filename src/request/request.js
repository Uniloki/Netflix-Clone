const API_KEY = 'f457f381920f81a2fa5ad7fb20b7e181'

const requests = {
	fetchTrendingMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
	fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
	fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
}

export default requests
