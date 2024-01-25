  import { Card, Row, Col } from "react-bootstrap";

  function DetailsCards({ data, handleModal }) { // this component renders all the cards at the bottom of the page (about the current weather like pressure, feels, like, humidity, etc..)
    let currentTemperature = (data.main.temp).toFixed(0);

    
     function getFeelsDescription(value){
      value = value.toFixed(0);
      if (value < currentTemperature){
        return (<p >Wind is making it feel cooler.</p>)
      } else if (value === currentTemperature){
          return (<p>Similar to the actual temperature.</p>)
      } else if (value > currentTemperature){
        return (<p>Humidity is making it feel warmer.</p>)
    }
     }

    function visibilityCalc(data) {
      let  chilometers= (data/1000).toFixed(1);
      if(chilometers >= 10){
        return (
          <div>
          <h3>{chilometers}km</h3>
          <Card.Text style={{ fontSize: "16px" }}>
          It's perfectly clear right now.
        </Card.Text>
          </div>
        )
      }else if(chilometers < 10 && chilometers > 5){
        return (
          <div>
          <h3>{chilometers}km</h3>
          <Card.Text style={{ fontSize: "16px" }}>
          Light haze is affecting visibility.
        </Card.Text>
          </div>
        )
      }else if(chilometers <= 5){
        return (
          <div>
          <h3>{chilometers}km</h3>
          <Card.Text style={{ fontSize: "16px" }}>
          Haze is affecting visibility.
        </Card.Text>
          </div>
        )
      }
    }
    function calculateTime(timestamp, timezoneOffset) {
      const date = new Date(timestamp * 1000);
      const utcOffset = date.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
      const localOffset = timezoneOffset * 1000; // Convert seconds to milliseconds
      const localTime = date.getTime() + utcOffset + localOffset;
      const localDate = new Date(localTime);
      const hours = localDate.getHours();
      const minutes = "0" + localDate.getMinutes();
      const formattedTime = hours + ":" + minutes.substr(-2);
      return formattedTime;
    }
  
    function getCardInfo(key) {
      let info = {};
      switch (key) {
        case "feels_like":
          info = {
            keyName: "FEELS LIKE",
            cardIcon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-thermometer-half" viewBox="0 0 16 16">
                <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415"/>
                <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
              </svg>
            ),
            unit: "°"
          };
          break;
  
        case "humidity":
          info = {
            keyName: "HUMIDITY",
            cardIcon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-droplet-half" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
                <path fillRule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z"/>
              </svg>
            ),
            unit: "%"
          };
          break;
  
        case "pressure":
          info = {
            keyName: "PRESSURE",
            cardIcon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 576 512">
                <path d="M544 416L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l512 0c17.7 0 32-14.3 
                  32-32s-14.3-32-32-32zm22.6-137.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L480 274.7 480 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5
               32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96zm-320-45.3c-12.5-12.5-32.8-12.5-45.3 0L160 274.7 160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7L54.6 233.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3z"/>
              </svg>
            ),
            unit: "hPa"
          };
          break;
  
        case "speed":
          info = {
            keyName: "WIND",
            cardIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wind" viewBox="0 0 16 16">
              <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
            </svg>
            ),
            unit: "mps"
          };
          break;
  
        case "deg":
          info = {
            keyName: "WIND DEGREE",
            cardIcon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-compass" viewBox="0 0 16 16">
            <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
            <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
          </svg>),
            unit: "deg"
          };
          break;

        case "sea_level":
            info = {
              keyName: "SEA LEVEL",
              cardIcon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-water" viewBox="0 0 16 16">
              <path d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65m0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 6.964a.5.5 0 0 1-.278-.65m0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 9.964a.5.5 0 0 1-.278-.65m0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65"/>
            </svg>),
              unit: "hPa"
            };
          break;

          case "grnd_level":
            info = {
              keyName: "GROUND LEVEL",
              cardIcon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe-europe-africa" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M3.668 2.501l-.288.646a.847.847 0 0 0 1.479.815l.245-.368a.81.81 0 0 1 1.034-.275.81.81 0 0 0 .724 0l.261-.13a1 1 0 0 1 .775-.05l.984.34q.118.04.243.054c.784.093.855.377.694.801-.155.41-.616.617-1.035.487l-.01-.003C8.274 4.663 7.748 4.5 6 4.5 4.8 4.5 3.5 5.62 3.5 7c0 1.96.826 2.166 1.696 2.382.46.115.935.233 1.304.618.449.467.393 1.181.339 1.877C6.755 12.96 6.674 14 8.5 14c1.75 0 3-3.5 3-4.5 0-.262.208-.468.444-.7.396-.392.87-.86.556-1.8-.097-.291-.396-.568-.641-.756-.174-.133-.207-.396-.052-.551a.33.33 0 0 1 .42-.042l1.085.724c.11.072.255.058.348-.035.15-.15.415-.083.489.117.16.43.445 1.05.849 1.357L15 8A7 7 0 1 1 3.668 2.501"/>
            </svg>),
              unit: "hPa"
            };
          break;
    
  
        default:
          break;
      }
      return info;
    }
  
    function checkUnit(key, value) {
      const info = getCardInfo(key);
      if (info.unit) {
        return `${value.toFixed(0)}${info.unit}`;
      } else {
        return value;
      }
    }
  
    return (
      <Row className="row-gap-4 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
        {Object.entries(data.main).map(([key, value]) =>
          key.includes("temp") ? null : (
            <Col key={key}>
              <Card className="card-transparent bg-glassy text-light rounded-5">
                <Card.Body>
                  <Card.Title className="d-flex opacity-50 mb-3">
                    {getCardInfo(key).cardIcon}
                    <span className="ms-1" style={{ fontSize: "14px" }}>
                      {getCardInfo(key).keyName}
                    </span>
                  </Card.Title>
                  <h3>{checkUnit(key, value)}</h3>
                  {key.includes("feels")? getFeelsDescription(value):null}
                </Card.Body>
              </Card>
            </Col>
          )
        )}
        {Object.entries(data.wind).slice(0,2).map(([key, value]) => (
          <Col key={key}>
            <Card className="card-transparent bg-glassy text-light rounded-5">
              <Card.Body>
                <Card.Title className="d-flex opacity-50 mb-3">
                  {getCardInfo(key).cardIcon}
                  <span className="ms-1" style={{ fontSize: "14px" }}>
                    {getCardInfo(key).keyName}
                  </span>
                </Card.Title>
                <h3>{checkUnit(key, value)}</h3>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Col>
          <Card className="card-transparent bg-glassy text-light rounded-5">
            <Card.Body>
              <Card.Title className="d-flex opacity-50 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sunset-fill" viewBox="0 0 16 16">
                  <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                </svg>
                <span className="ms-1" style={{ fontSize: "14px" }}>
                  SUNSET
                </span>
              </Card.Title>
              <h3>{calculateTime(data.sys.sunset, data.timezone)}</h3>
              <Card.Text style={{ fontSize: "16px" }}>
                Sunrise: {calculateTime(data.sys.sunrise, data.timezone)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card-transparent bg-glassy text-light rounded-5">
            <Card.Body>
              <Card.Title className="d-flex opacity-50 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                </svg>
                <span className="ms-1" style={{ fontSize: "14px" }}>
                  VISIBILITY 
                </span>
              </Card.Title> 
              <Card.Text style={{ fontSize: "13px" }}>
                The maximum value of visibility is 10 km.
              </Card.Text>
              {visibilityCalc(data.visibility)}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
  
  export default DetailsCards;
