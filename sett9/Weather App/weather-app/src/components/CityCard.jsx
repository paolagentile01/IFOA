import { useState, useEffect } from "react";
import { Row, Col, Button, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWeatherIcon } from "./getWeatherIcons";
import CurrentTime from "./CurrentTime";

function CityCard() {
   // CityCard takes the current store and saves it in variables
  const fetch = useSelector((state) => state.fetch); // The `fetch` method handles the data fetching for both the weather and forecast. Whenever the user searches for a city and the fetch request is successful, the fetched data is saved in an array of objects with two properties(one for each fetch).
  const error = useSelector((state) => state.error); // error handling when fetching data (boolean value)
/*   const load = useSelector((state) => state.load); */

  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (error.error) {
      setShowErrorMessage(true);
      setTimeout(() => setShowErrorMessage(false), 2000); // Display the message for 2 seconds
    }
  }, [error]);

  console.log(error.error);
  return (
    <>
      {showErrorMessage === true ?(   // if error is true(when user seach for an invalid location or empty input), show the error message for 2 seconds
        <Alert className="bg-dark text-light border-0 rounded-0 text-center p-5">
          <Alert.Heading>No Results Found</Alert.Heading>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </Alert>
      ):null}

      {fetch.map((city, index) => (  // this action maps the cities available in the store and displays them as cards, with the name of city and its country, local time (calculated in the CurrentTime COMPONENT), current temperature, current weather and highest/lowest temperature(with a 'DISCOVER MORE' button that leads to the WeatherRealTimePage)
        <div key={index} className="card card-search-section mt-4 py-3 px-4 mx-3 rounded-5 shadow-lg text-white">
          <div className="d-flex justify-content-between">
            <div> 
              <p className="mb-0" style={{ fontSize: "20px", fontWeight: "400" }}>
                {city.city.city?.name}, {city.city.city?.country}
              </p>
             <div className="opacity-50" style={{ fontSize: "14px", fontWeight: "500" }}>
             Local Time: <CurrentTime timeZoneOffset={city.details.timezone} /> 
             </div>
              {/* <div className="my-3">
                {getWeatherIcon(
                  city.details.weather[0].description,
                  60
                )}
              </div> */}
            </div>
            <p className="mb-2" style={{ fontSize: "65px", fontWeight: "400" }}>
              {city.details?.main.temp.toFixed(0)}° 
            </p>
          </div>

          <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-end">
              <div>
              <span className="opacity-50 my-0" style={{ fontSize: "14px", fontWeight: "200" }}>
                  H:{city.details?.main.temp_max.toFixed(0)}° L:{city.details?.main.temp_min.toFixed(0)}°
          </span>
                <p className="mb-0 mt-1 me-3" style={{ fontSize: "14px", fontWeight: "300" }}>
                  {city.details.weather
                    ? city.details.weather[0].description.charAt(0).toUpperCase() +
                      city.details.weather[0].description.slice(1)
                    : ""}
                </p>

              </div>
              <Button
                style={{ fontSize: "13px" }}
                onClick={() => navigate(`/details/${city.city.city?.name}`)} //  When user clicks on the button, navigate sets the name of the city as URL parameter and leads to the WeatherRealTime Page
                className="btn btn-sm btn-light discover-btn"
              >
                Discover More
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CityCard;

{/* <span>
{getWeatherIcon(
  city.details.weather[0].description,
  80
)}
</span> */}