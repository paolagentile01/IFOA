import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CityCard from "../components/CityCard";
import { useEffect, useState } from "react";

function RenderSearchPage({FetchData, city}){

    const [inputUser,setInputUser] = useState("");
    const [citySearched, setCitySearched] = useState({});

    
  useEffect(() => {
    setCitySearched(city)
  }, [city]);     
    


    const submitInput = () => {
      setInputUser(inputUser);
      FetchData(inputUser);
    }
  
    return(
      <Container className='app'>
        <h4 className="display-6">Check the weather</h4>
        <Form>
          <Row className="my-3">
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search your location here..."
                className="ms-sm-2 rounded-5"
                value={inputUser}
                onChange={(e) => setInputUser(e.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button type="button" onClick={submitInput}>
                SEARCH
              </Button>
            </Col>
          </Row> {city? (<CityCard citySearched={citySearched}/>):(null)}
     
        </Form>
      </Container>
    )
  }
  

export default RenderSearchPage;