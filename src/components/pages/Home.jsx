import MovieCard from "../MovieCard"

function Home() {
    const movies = [
        {id: 1, title: "John Wick", release_date: "2011"},
        {id: 2, title: "John Wick 2", release_date: "2014"},
        {id: 3, title: "John Wick 3", release_date: "2017"}
    ]
    return <div className="home">
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </div>
}
export default Home