import { Col, Row } from "react-bootstrap";
import {useState, useEffect} from 'react';


function MovieCard (props) {
const url = `http://www.omdbapi.com/?apikey=985eb8ec&s=`;
const type = "&type=";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        url + props.search + type + props.category
      );
      const jsonData = await response.json();
      setData(jsonData.Search);
      console.log(jsonData)
    } catch (error) {
      console.log('Error:', error);
    }
  };


return (
    
     <Row >      
     {data.slice(0,5).map((data, index) => (
      <Col key={index}><img className="img-fluid"  src={data.Poster} alt={data.Title} /> </Col>
  ))}
  </Row>

  );

};

export default MovieCard;