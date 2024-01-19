import { Col, Row } from "react-bootstrap";
import {useState, useEffect} from 'react';



function MoviesDetails(props) {

  let idGenre = props.genre;
   
    const urlSearch = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=3';
    const requestOptions = {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2Q3NDg4MGRlYmE1NzlmMjdkN2QwM2U5MzQxNmFhZSIsInN1YiI6IjY1YTg0MGIzYTZkZGNiMDEyOTI0MzgyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d6PymSotosp6h_sYjHUt7CbcBh7FjVDW1hx40dLuXm0`,
        }
    }
    const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    
  }, []);

    const fetchData = async () => {
      try {
          const response = await fetch(
            urlSearch,
              requestOptions
          )
          const jsonData = await response.json();
          const MovieCategory = jsonData.results.filter(movie => {
            const hasMatchingGenre = movie.genre_ids.includes(idGenre.id);
            return hasMatchingGenre;
          });
        console.log(jsonData.results);
        setData(MovieCategory);
     /*      setData(jsonData.genres);
          console.log(jsonData.genres) */
        } catch (error) {
          console.log('Error:', error);
        }
      };
      
      return (
        
        <Row className="g-2 "> 
        <h1>{props.genre.name}</h1>
            {
                data.map((movie, index) =>{
                    let src = 'http://image.tmdb.org/t/p/w500' + movie.poster_path;
                return(
                    
                   <Col key={index}><img   src={src} alt={src} className="img-fluid" /></Col> 

                )}
                
                
                )       
            }     
            
        </Row>
   
     );

}
  export default MoviesDetails;


/*   https://flix-zeta.vercel.app/

  https://github.com/ErickSalazar44/Flix/blob/main/src/utils/getPosterUrl.ts *//* import { Col, Row } from "react-bootstrap";
import {useState, useEffect} from 'react';



function MoviesDetails(props) {
    const trending = '/day?language=en-US';
    const url = 'https://api.themoviedb.org/3/trending/';
    const requestOptions = {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2Q3NDg4MGRlYmE1NzlmMjdkN2QwM2U5MzQxNmFhZSIsInN1YiI6IjY1YTg0MGIzYTZkZGNiMDEyOTI0MzgyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d6PymSotosp6h_sYjHUt7CbcBh7FjVDW1hx40dLuXm0`,
        }
    }
    const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
        const response = await fetch(
           url + props.category + trending ,
            requestOptions
        )
        const jsonData = await response.json();
        setData(jsonData.results);
        console.log(jsonData.results)
      } catch (error) {
        console.log('Error:', error);
      }
    };
      return (
    
        <Row className="d-flex gap-2 "> 
            {
                data.slice(0,5).map((movie, index) =>{
                    let src = 'http://image.tmdb.org/t/p/w200' + movie.poster_path;
                return(
                    
                   <Col key={index} ><img  src={src} alt={src} className="img-fluid" /></Col> 

                )}
                
                
                )       
            }     
            
        </Row>
   
     );

}
  export default MoviesDetails;


  https://flix-zeta.vercel.app/

  https://github.com/ErickSalazar44/Flix/blob/main/src/utils/getPosterUrl.ts  */