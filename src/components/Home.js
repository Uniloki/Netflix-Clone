import React from 'react'
import Row from './row'
import Banner from './Banner'
import requests from '../request/request'
function Home() {
	return (
		<div>
			<Banner></Banner>

			<Row
				title="Trending Now"
				fetchUrl={requests.fetchTrendingMovies}
				isLargeRow={true}
			>
				{' '}
			</Row>
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated}>
				{' '}
			</Row>
			<Row title="Action" fetchUrl={requests.fetchActionMovies}>
				{' '}
			</Row>
			<Row title="Comedy" fetchUrl={requests.fetchComedyMovies}>
				{' '}
			</Row>
			<Row title="Adventure" fetchUrl={requests.fetchAdventureMovies}>
				{' '}
			</Row>
		</div>
	)
}

export default Home
