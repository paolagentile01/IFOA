import { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWeatherIcon } from "./getWeatherIcons";

function CityCard() {
  const fetch = useSelector((state) => state.fetch);
  const error = useSelector((state) => state.error);
/*   console.log(error.error); */
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (error.error) {
      setShowErrorMessage(true);
      setTimeout(() => setShowErrorMessage(false), 1500); // Display the message for 3 seconds
    }
  }, [error]);

  return (
    <>
      {showErrorMessage === true ? <p>City not found.</p>:null}
      {fetch.map((city, index) => {
        return (
          <Row key={index}>
            <Col>
              <div className="card card-search-section mt-4 py-3 px-4 mx-3 rounded-5 shadow-lg text-white">
                <div className="d-flex justify-content-between">
                  <div>
                    <span
                      className="mb-2"
                      style={{ fontSize: "65px", fontWeight: "400" }}
                    >
                      {city.details?.main.temp.toFixed(0)}°
                    </span>
                    <p
                      className="opacity-50 my-0"
                      style={{ fontSize: "14px", fontWeight: "200" }}
                    >
                      H:{city.details?.main.temp_max.toFixed(0)}° L:
                      {city.details?.main.temp_min.toFixed(0)}°
                    </p>
                    <p
                      className="mb-0 mt-1"
                      style={{ fontSize: "14px", fontWeight: "300" }}
                    >
                      {city.details.weather
                        ? city.details.weather[0].description.charAt(0).toUpperCase() +
                          city.details.weather[0].description.slice(1)
                        : ""}
                    </p>
                  </div>
                  <span>
                    {getWeatherIcon(
                      city.details.weather[0].description,
                      100
                    )}
                  </span>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ fontSize: "22px", fontWeight: "400" }}>
                    {city.city.city?.name}, <span>{city.city.city?.country}</span>
                  </span>
                  <Button
                    style={{ fontSize: "13px" }}
                    onClick={() => navigate(`/details/${city.city.city?.name}`)}
                    className="btn btn-sm btn-light discover-btn"
                  >
                    Discover More
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        );
      })}
    </>
  );
}

export default CityCard;