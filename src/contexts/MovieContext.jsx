import { createContex, useState, useContext, useEffect } from "react";

const MovieContext = createContex()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavortes] = useState([])

    useEffect(() => {
        const storedFavs = JSON.parse(localStorage.getItem('favorites'))

        if(storedFavs){
            setFavortes(JSON.parse(storedFavs))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavortes(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavortes(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}