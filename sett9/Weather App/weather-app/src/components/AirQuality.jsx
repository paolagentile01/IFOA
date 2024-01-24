import { useState, useEffect } from "react";
import { Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function AirQuality() {
  const airPollutionData = useSelector((state) => state.fetchDetails);
  const navigate = useNavigate();
  const [selectedRange, setSelectedRange] = useState("");

  if (!airPollutionData) {
    return <div>Loading...</div>;
  }

  const aqi = airPollutionData[0]?.climeDetails.list[0].main.aqi;
  const co = airPollutionData[0]?.climeDetails.list[0].components.co;

  useEffect(() => {
    setSelectedRange(aqi);
  }, [airPollutionData]);


  let airQuality;
  let airQualityDescription;
  switch (aqi) {
    case 1:
      airQuality = "Good";
      airQualityDescription =
        "Air quality is considered good, with low to no presence of pollutants.";
      break;
    case 2:
      airQuality = "Fair";
      airQualityDescription =
        "Air quality is considered fair, with low presence of pollutants.";
      break;
    case 3:
      airQuality = "Moderate";
      airQualityDescription =
        "Air quality is moderate, with slightly high levels of pollutants.";
      break;
    case 4:
      airQuality = "Poor";
      airQualityDescription =
        "Air quality is poor, with high levels of pollutants.";
      break;
    case 5:
      airQuality = "Very Poor";
      airQualityDescription =
        "Air quality is very poor, with extremely high levels of pollutants.";
      break;
    default:
      airQuality = "Unknown";
      airQualityDescription = "Air quality is not available in this location.";
      break;
  }

  const handleInputChange = (e) => {
    setSelectedRange(e.target.value);
  };

  return (
    <div xs={6}>
      <p className="my-0" style={{ fontSize: "22px", fontWeight: "600" }}>
        {aqi} - {airQuality}
      </p>
      <span style={{ fontSize: "14px", fontWeight: "300" }}>
        {airQualityDescription}
      </span>
      <input
        min="1"
        max="5"
        value={selectedRange? selectedRange: "1"}
        type="range"
        name="range"
        className="air-range my-4"
        style={{ width: "100%" }}
        onChange={handleInputChange}
        disabled
      />
      <Link
        onClick={() => navigate(`/details/${city.city.city?.name}`)}
        className="nav-link d-flex justify-content-between border-top opacity-50 pt-2"
      >
        <span style={{ fontSize: "16px" }}>See More</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          width={11}
          fill="white"
          className=" opacity-50"
        >
          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
      </Link>
    </div>
  );
}

export default AirQuality;