import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import {useState, useEffect} from 'react';

import RenderPage from './RenderPage';
import MoviesDetails from './MovieDetails';

function HomePage() {
  const category = "tv";

    const urlGenres = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    
    const requestOptions = {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2Q3NDg4MGRlYmE1NzlmMjdkN2QwM2U5MzQxNmFhZSIsInN1YiI6IjY1YTg0MGIzYTZkZGNiMDEyOTI0MzgyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d6PymSotosp6h_sYjHUt7CbcBh7FjVDW1hx40dLuXm0`,
        }
    }
    const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataSearch();
    
  }, []);


  const fetchDataSearch = async () => {
    try {
        const response = await fetch(
          urlGenres,
            requestOptions
        )
        const jsonData = await response.json();
        jsonData.genres.map((genre) => {
          
          let idGenre = genre;
          console.log(idGenre.id);
        })
        
      
        setData(jsonData.genres);
        console.log(jsonData.genres)
      } catch (error) {
        console.log('Error:', error);
      }
    };
      return (
    
    <>
        <Container fluid>
            <h1 >Home Page</h1>
           {/*  <RenderPage category={category}/> */}
           { data.slice(0,4).map((genre, index) => <MoviesDetails key={index} category={category} genre={genre}/>)}
        </Container>
    </>
   
     );

}


export default HomePage;