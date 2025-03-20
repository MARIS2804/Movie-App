import './css/App.css'
import Favorite from './pages/favorites'
import Home from './pages/home'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar'
import { MovieProvider } from './contexts/MovieContext'

function App() {


  return (
    <MovieProvider><Navbar />
    <main className='main-content'>
    <Routes> 
           <Route path="/" element={<Home />} />
           <Route path="/Favorites" element={<Favorite />} />
    </Routes>

    </main>
    </MovieProvider>
      
  )
}


export default App
