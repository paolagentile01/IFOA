import './App.css'
import RenderDetailPage from './pages/Details';
import NotFound from './pages/NotFound';
import SearchPage from './pages/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div>

    <BrowserRouter>
   
    <Routes>
       <Route path='/' element={<SearchPage />}></Route>
       <Route path='/details/:cityName' element={<RenderDetailPage />}></Route>
       <Route path='*' element={<NotFound />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
