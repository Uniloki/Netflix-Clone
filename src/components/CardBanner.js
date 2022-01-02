import React, { useEffect, useState } from 'react'
import '../style/CardBanner.css'
function CardBanner(movie) {
	console.log(movie)
	console.log(movie.backdrop_path)

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str
	}

	return (
		<header
			className="banner"
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.movie.backdrop_path}")`,
				backgroundPosition: 'center center',
			}}
		>
			<div className="banner_contents">
				<h1 className="banner_title">
					{movie.movie.title || movie.movie.name || movie.movie.original_name}
				</h1>
			</div>
			<div className="banner_bottom" />
		</header>
	)
}
export default CardBanner
