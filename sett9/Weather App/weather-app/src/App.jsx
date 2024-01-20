import './App.css'
import RenderDetailPage from './pages/Details';
import NotFound from './pages/NotFound';
import SearchPage from './pages/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState({});
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      FetchData();
    }, []);

  const FetchData = async (inputUser) =>{
    let defaultCity = 'Milano';
    const url =  `http://api.openweathermap.org/data/2.5/forecast?q=${inputUser? inputUser: defaultCity}&limit=2&units=metric&appid=9eca11d3019f2652eec516e76a720461`;
     
        try{
            const response =  await fetch(url)
            const jsonData = await response.json();
            setCity(jsonData);
            console.log(jsonData);
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
