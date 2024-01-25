import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import RenderDetailPage from "../components/Details";
import { useDispatch, useSelector } from "react-redux";
import DetailsCards from "../components/DetailsCards";
import { fetchClimeDetails } from "../actions/fetchDataActions";
import CurrentTime from "../components/CurrentTime";
import FullscreenModal from "../components/ModalFullScreen";

function WeatherRealTime() {
  const {cityName} = useParams(); // useParams takes the url parameter called cityName and saves it in a variable
  const location = useSelector((state)=> state.fetch); // takes the store data with all the cities saved
  let city = location.find((obj) => obj.city.city.name === cityName); //finds the city that has the same name(in order to have all the data of the location clicked by the user and populate the page accordingly)


/*   console.log(city.city.city.coord);
 */
console.log(city.details.main);
  const dispatch = useDispatch();
/*   const load = useSelector((state) => state.load);
  if (load.load) {
    // Display loading icon or spinner if load is true
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
      </div>

  } */

  useEffect(() => {
   dispatch(fetchClimeDetails(city.city.city.coord.lat, city.city.city.coord.lon )); //dispatch fetch giving lat and lon of the location( in this case is for the air quality API )

  }, []);


  return (
    location?(
      <Container fluid className="p-3 change-background">
       <Row>
        <Col>
        <Link to='/' className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"  className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
      </svg>
        </Link>
        </Col>
       </Row>
            <div className="d-flex flex-column justify-content-center align-items-center my-5">
                <span className="m-0 " style={{fontSize:"40px", fontWeight:"400"}}>{city.city.city.name}</span>
                <CurrentTime timeZoneOffset={city.details.timezone} /> 
                <p className="mb-0 align-self-middle" style={{fontSize:"84px", fontWeight:"200", letterSpacing:"-0.4rem"}}>{city.details.main?.temp.toFixed(0)}°</p>
               <span style={{fontSize:"22px", fontWeight:"300"}}>{city.details.weather ? city.details.weather[0].description.charAt(0).toUpperCase() + city.details.weather[0].description.slice(1) : ""}</span>
                <p style={{ fontSize: "18px", fontWeight: "400" }}>
                  H:{city.details?.main.temp_max.toFixed(0)}° L:{city.details?.main.temp_min.toFixed(0)}°
                </p> 
            </div>

              <Row>
                <Col>
                <RenderDetailPage city={city}  todayData={city.details.main} />
                  <DetailsCards data={city.details} />  
                </Col>
              </Row>
      </Container>
    ):(null)
  );
}

export default WeatherRealTime;