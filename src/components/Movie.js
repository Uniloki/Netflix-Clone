import React, { useEffect, useState } from 'react'
import '../style/Movie.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CardBanner from './CardBanner'
function Movie() {
	let id = useParams()
	const [movie, setMovie] = useState('')
	useEffect(() => {
		window.scrollTo(0, 0)
		async function fetchData() {
			const request = await axios.get(
				`https://api.themoviedb.org/3/movie/${id.id}?api_key=f457f381920f81a2fa5ad7fb20b7e181`
			)
			setMovie(request.data)
			console.log(request.data)
			console.log(id)

			return request
		}
		fetchData()
	}, [])

	return (
		<div>
			<div>
				<CardBanner movie={movie} />
				<div className="movie-desc">
					<h2> {movie.overview} </h2>

					<a className="watch-link" href={movie.homepage}>
						Watch Now
					</a>
				</div>
			</div>
		</div>
	)
}

export default Movie
