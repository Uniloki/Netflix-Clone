import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Movie from './components/Movie'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
	return (
		<Router>
			<div className="app">
				<Nav />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movie/:id" element={<Movie />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	)
}

export default App
