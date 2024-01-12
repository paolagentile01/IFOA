import { Col, Row } from "react-bootstrap";
import {useState, useEffect} from 'react';
const url = `http://www.omdbapi.com/?apikey=af015abb&s=`;


const SingleGallery = ({saga}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        url + saga
      );
      const jsonData = await response.json();
      setData(jsonData.Search);
    } catch (error) {
      console.log('Error:', error);
    }
  };


return (
    <Row>
     
      {data.slice(0, 8).map((data) => (
        <Col key={data.imdbID}>
          <img className="img-fluid mb-4"  src={data.Poster} alt={data.Title} />
        </Col>
      ))}
    </Row>
  );

};

export default SingleGallery;

