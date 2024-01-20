import './App.css'
import RenderDetailPage from './pages/Details';
import NotFound from './pages/NotFound';
import SearchPage from './pages/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(true);


  const FetchData = async (inputUser) =>{
    const url =  `http://api.openweathermap.org/data/2.5/forecast?q=${inputUser}&limit=2&units=metric&appid=6c6e849d54a8a74f5542dc039fea4bb4`;
     
        try{
            const response =  await fetch(url)
            const jsonData = await response.json();
            setCity(jsonData);
            setIsLoading(false);

        }catch(err){
            console.log(err);
        }


      }
   
  return (
    <div>

    <BrowserRouter>
   
    <Routes>
       <Route path='/' element={<SearchPage FetchData={FetchData} city={city}  />}></Route>
       <Route path='/details/:cityName' element={<RenderDetailPage FetchData={FetchData} city={city} />}></Route>
       <Route path='*' element={<NotFound />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
