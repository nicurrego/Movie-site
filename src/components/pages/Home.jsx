import MovieCard from "../MovieCard"
import { useState } from "react"
import "../../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        {id: 1, title: "John Wick", release_date: "2011"},
        {id: 2, title: "John Wick 2", release_date: "2014"},
        {id: 3, title: "John Wick 3", release_date: "2017"}
    ]
    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return <div className="home">
        <form className="search-form" onSubmit={handleSearch}>
            <input
            type="text"
            placeholder="Search movies..."
            className="search-input"
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button" >Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(
                (movie) => 
                    movie.title.toLocaleLowerCase().startsWith(searchQuery) && (
                    <MovieCard key={movie.id} movie={movie} />
                    )
            )}
        </div>
    </div>
}
export default Home