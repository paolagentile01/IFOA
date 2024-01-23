import React, { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import RenderDetailPage from "../components/Details";
import { useDispatch, useSelector } from "react-redux";

import { fetchClimeDetails } from "../actions/fetchDataActions";

function WeatherRealTime() {
  const {cityName} = useParams();
  const location = useSelector((state)=> state.fetch);
  let city = location.find((obj) => obj.city.city.name === cityName);
  console.log(city);


  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(fetchClimeDetails(city.city.city.coord.lat, city.city.city.coord.lon ));
  }, []);

  const locationData = useSelector((state)=> state.fetchDetails);

  function ObjectCards({data}) {
    return (
        <Row className=" g-4 row-cols-xs-2 row-cols-md-3">
          {Object.entries(data).map(([key, value]) => (
            <Col key={key}>
              <Card className="card-transparent bg-glassy text-light rounded-5">
                <Card.Body>
                  <Card.Title>{key}</Card.Title>
                  <Card.Text>{checkUnit(key, value)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
    );
  }
  
  function checkUnit(key, value) {
    if (key.includes("temp") || key.includes("feels")) {
      return `${value.toFixed(0)}°C`;
    } else if (key === "humidity") {
      return `${value}%`;
    } else if (key === "pressure") {
      return `${value} hPa`;
    } else {
      return value;
    }
  }

  return (
    location?(
      <Container fluid className=" change-background">
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
                  <ObjectCards data={city.details.main} />  
                </Col>
              </Row>
      </Container>
    ):(null)
  );
}

export default WeatherRealTime;