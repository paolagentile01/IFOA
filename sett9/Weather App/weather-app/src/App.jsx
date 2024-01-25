import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';
import NotFound from './pages/NotFound';
import SearchPage from './pages/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from "react";
import WeatherRealTime from './pages/WeatheRealTime';

//Order of the pages and/or components: App.jsx, SearchPage.jsx, CityCard.jsx, CurrentTime.jsx, WeatherRealTime.jsx, DetailsCards.jsx, Details.jsx, AirQuality.jsx, ModalFullScreen.jsx

function App() {   
  return (
    <div>
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<SearchPage />}></Route>
                <Route path='/details/:cityName' element={<WeatherRealTime />}></Route>
                <Route path='*' element={<NotFound />}></Route> 
              </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
