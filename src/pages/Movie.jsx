import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import {BsWallet2,BsHourglassSplit,BsFileEarmarkTextFill} from 'react-icons/bs'

import MovieCard from '../components/MovieCard'
import './movie.css'

const MoviesURL = import.meta.env.VITE_API
const ApiKey = import.meta.env.VITE_API_KEY

export default function Movie(){
    const {id} = useParams()
    console.log(id)
    const [movie,setMovie] = useState(null)

    const getMovie = async(url) => {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        setMovie(data)
    }

    useEffect(() => {
        const movieUrl = `${MoviesURL}${id}?${ApiKey}`
        getMovie(movieUrl)
    },[])
    return (
        <div>
            {movie && <>
            <MovieCard movie={movie} showLink={false}/>
            </>}
        </div>
    )
}