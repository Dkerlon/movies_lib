import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

import './Navbar.css'

export default function Navbar(){

    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmite = (e) => {
        e.preventDefault()
        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch('')
    }

    return(
        <nav id="navbar">
            <h2>
                <Link to='/'><BiCameraMovie/>Movies Lib</Link>
            </h2>
            <form onSubmit={handleSubmite}>
                <input placeholder='Busque um filme' type='text' onChange={(e) => setSearch(e.target.value)} value={search}/>
                <button type='submit'>
                    <BiSearchAlt2/>
                </button>
            </form>
        </nav>
    )
}