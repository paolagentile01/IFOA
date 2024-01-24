import React, { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import RenderDetailPage from "../components/Details";
import { useDispatch, useSelector } from "react-redux";
import DetailsCards from "../components/DetailsCards";
import { fetchClimeDetails } from "../actions/fetchDataActions";

function WeatherRealTime() {
  const {cityName} = useParams();
  const location = useSelector((state)=> state.fetch);
  let city = location.find((obj) => obj.city.city.name === cityName);
/*   console.log(city.city.city.coord);
 */
console.log(city.details.main);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(fetchClimeDetails(city.city.city.coord.lat, city.city.city.coord.lon ));
  }, []);


  return (
    location?(
      <Container fluid className="p-3 change-background">
       {/*  <video src="" autoPlay muted loop></video> */}
       <Row>
        <Col>
        <Link to='/' className="btn btn-light mt-3 py-1">Go Back</Link>
        </Col>
       </Row>
            <div className="d-flex flex-column justify-content-center align-items-center my-5">
                <span className="m-0 " style={{fontSize:"40px", fontWeight:"400"}}>{city.city.city.name}</span>
                <p className="mb-0 align-self-middle" style={{fontSize:"84px", fontWeight:"200", letterSpacing:"-0.4rem"}}>{city.details.main?.temp.toFixed(0)}°</p>
               <span style={{fontSize:"22px", fontWeight:"300"}}>{city.details.weather ? city.details.weather[0].description.charAt(0).toUpperCase() + city.details.weather[0].description.slice(1) : ""}</span>
                <p style={{ fontSize: "18px", fontWeight: "400" }}>
                  H:{city.details?.main.temp_max.toFixed(0)}° L:{city.details?.main.temp_min.toFixed(0)}°
                </p> 
            </div>

              <Row>
                <Col>
                <RenderDetailPage city={city} />
                  <DetailsCards data={city.details} />  
                </Col>
              </Row>
      </Container>
    ):(null)
  );
}

export default WeatherRealTime;