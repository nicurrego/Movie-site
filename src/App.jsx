import './App.css'
import Home from './components/pages/Home'
import Favorites from './components/pages/Favorites'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </main>
  )
}

export default App
