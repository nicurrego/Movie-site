import './css/App.css'
import Home from './components/pages/Home'
import Favorites from './components/pages/Favorites'
import { Routes, Route } from 'react-router-dom'
import { MovieProvider } from './context/MovieContext'
import NavBar from './components/NavBar'


function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
