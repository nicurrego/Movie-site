import MovieCard from "../MovieCard"
import { useState, useEffect } from "react"
import { searchMovies, getPopularMovies } from "../../services/api"
import "../../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.error(err)
                SpeechSynthesisErrorEvent("Failed to load movies")
            }
            finally {
                setLoading(fales)
            }
        }
        loadPopularMovies()
    }, [])

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