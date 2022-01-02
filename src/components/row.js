import axios from '../axios'
import React, { useEffect, useState } from 'react'
import '../style/Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import { Link } from 'react-router-dom'
const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([])
	const [trailerUrl, setTrailerUrl] = useState('')
	const [currentMovie, setCurrentMovie] = useState('')
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl)
			setMovies(request.data.results)
			return request
		}
		fetchData()
	}, [fetchUrl])

	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
			autoplay: 1,
		},
	}

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl('')
			setCurrentMovie('')
		} else {
			setCurrentMovie(movie)
			console.log(movie)
			movieTrailer(null, { tmdbId: movie.id } || movie?.name)
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search)
					setTrailerUrl(urlParams.get('v'))
					console.log(url)
				})
				.catch((error) => console.log(error))
		}
	}

	return (
		<div className="row">
			<h2> {title} </h2>

			<div className="row_posters">
				{movies.map((movie) => (
					<img
						key={movie.id}
						onClick={() => handleClick(movie)}
						className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
			{trailerUrl && (
				<div className="trailer_cont">
					<div className="trailer">
						{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
					</div>

					<div className="movie_card">
						<h1> {currentMovie.title} </h1>
						<p> {currentMovie.overview} </p>
						<button className="card_button">
							<Link
								className="link_button"
								to={{ pathname: `/movie/${currentMovie.id}` }}
							>
								{' '}
								Learn More{' '}
							</Link>
						</button>
					</div>
				</div>
			)}

			<div></div>
		</div>
	)
}

export default Row
