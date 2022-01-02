import axios from 'axios'

/** Base URL (All API request will start with this url) */
const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
})

export default instance
