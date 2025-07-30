
function MovieCard({movie}) {

    function onFavoriteClick() {
        alert("Favorite Clicked");
    }

    return <div className="mvoie-card">
        <div className="movie-poster">
            <img src={movie.urel} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>♥</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}

export default MovieCard;