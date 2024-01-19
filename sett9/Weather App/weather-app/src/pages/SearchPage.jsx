import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CityCard from "../components/CityCard";
import { useEffect, useState } from "react";

function RenderSearchPage(){
  
    const [inputUser,setInputUser] = useState("");
    const [city, setCity] = useState(0);

    useEffect(() => {
      FetchData();
    }, []);
    

    const FetchData = async (inputUser) =>{
        const cityProva = 'Milano';
        const url =  `http://api.openweathermap.org/data/2.5/forecast?q=${inputUser? inputUser: cityProva}&limit=2&appid=9eca11d3019f2652eec516e76a720461`;
         
            try{
                const response =  await fetch(url)
                const jsonData = await response.json();
                setCity(jsonData);
                console.log(jsonData);
            }catch(err){
                console.log(err);
            }
    }
        
    


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
          </Row> {city? (<CityCard city={city}/>):(null)}
     
        </Form>
      </Container>
    )
  }
  

export default RenderSearchPage;