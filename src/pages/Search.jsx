import { useEffect, useState } from "react"
import {useSearchParams} from 'react-router-dom'
import MovieCard from "../components/MovieCard"

import './MovieGrid.css'

const searchUrl = import.meta.env.VITE_SEARCH
const ApiKey = import.meta.env.VITE_API_KEY
export default function Search(){
    const [searchParamns] = useSearchParams()

    const [movies,setMovies] = useState([])
    const query = searchParamns.get("q")

    const getSearchdMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
    }
    useEffect(()=>{
        const searcWithQueryUrl = `${searchUrl}?${ApiKey}&query=${query}`
        getSearchdMovies(searcWithQueryUrl)
    },[query])

    return (
    <div className="container">
        <h2 className="title">Resultados para: <span className="queru-text">{query}</span></h2>
        <div className="movies-container">
            {movies.length === 0 ? <p>carregando...</p> : ''}
            {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    </div>)
}