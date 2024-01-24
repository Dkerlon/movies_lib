import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import './MovieGrid.css'

const MoviesURL = import.meta.env.VITE_API
const ApiKey = import.meta.env.VITE_API_KEY
export default function Home(){
    const [topMovies, setTopMovies] = useState([])
    const getTopRateMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)
    }
    useEffect(()=>{
        const topRatedUrl = `${MoviesURL}top_rated?${ApiKey}`
        getTopRateMovie(topRatedUrl)
    },[])
    return(
        <div className="container">
            <h2 className="title">Melhores filmes:</h2>
            <div className="movies-container">
                {topMovies.length === 0 ? <p>carregando...</p> : ''}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
}