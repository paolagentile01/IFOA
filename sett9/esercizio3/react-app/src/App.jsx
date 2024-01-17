import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavDark from './components/NavbarDark';
import MoviesPage from './assets/pages/Movies';
import TvShowsPage from './assets/pages/TvShows';
import HomePage from './assets/pages/Home';
import { Route, Routes } from "react-router-dom";

function App() {


  return (
    <>
    <NavDark/>
      {/* Defining routes path and rendering components as element */}
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/movies" element={<MoviesPage />}/>
      <Route path="/tvshows" element={<TvShowsPage />}/>
    </Routes>
    </>
  )
}


export default App
