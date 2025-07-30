import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <div>
      <MovieCard movie={{title: "Tim's Film", release_date: "2014"}} />
      <MovieCard movie={{title: "Tom's Film", release_date: "2014"}} />
      <MovieCard movie={{title: "Tam's Film", release_date: "2017"}} />
    </div>
  )
}

export default App
