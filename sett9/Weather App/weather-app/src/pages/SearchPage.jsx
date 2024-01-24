import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import CityCard from "../components/CityCard";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataSearch } from "../actions/fetchDataActions";


function RenderSearchPage(){

    const [inputUser,setInputUser] = useState("");
    const dispatch = useDispatch();
      
    const checkValidity = (value) => {
      if( value === ''){
        return false;
      }else {
        return true;
      }
    }


    const submitInput = () => {
      const check = checkValidity(inputUser);
      if (check){
        setInputUser(inputUser);
        dispatch(fetchDataSearch(inputUser));
        return setInputUser("");
      } else{
        return alert("Please enter a valid location.");
      }
    }
  

    return(
      <Container className='app'>
        <h4 className=" mx-4" style={{fontSize:"30px", fontWeight:"300"}}>Check the Weather</h4>
        <Form >
          <Row className="my-3 form g-0">
            <Col className="col-12">
              <Form.Control
                type="text"
                placeholder="Search your location here..."
                className=" rounded-3 shadow"
                maxLength={100}
                value={inputUser}
                onChange={(e) => setInputUser(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') { // Check if the pressed key is Enter 
                    e.preventDefault();
                    submitInput(); 
                    setInputUser("");
                  }
                }}
              />
{/*             {inputUser.length > 0 && (
              <Dropdown className="bg-light text-dark rounded-bottom-5 p-3">
                <Dropdown.Item href="#/action-1" className="mb-2">Action</Dropdown.Item>
              </Dropdown>
            )} */}
            </Col>
            <div>
             <Button type="button" className="d-none d-lg-block btn-dark search-btn " onClick={submitInput} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
              </Button>
            </div>
          </Row> 
          <CityCard />
     
        </Form>
      </Container>
    )
  }
  

export default RenderSearchPage;