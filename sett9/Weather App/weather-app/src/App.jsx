import './App.css'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SearchPage from './pages/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className='app'>

    <BrowserRouter>
   
    <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='/search' element={<SearchPage />}></Route>
       <Route path='*' element={<NotFound />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
