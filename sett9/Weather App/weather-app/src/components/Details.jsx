import { Row, Col } from "react-bootstrap";
import { getWeatherIcon } from "./getWeatherIcons";
import AirQuality from "./AirQuality";

function RenderDetailPage({city}) {

    function FormatData(dt_txt, action) {
      const date = new Date(dt_txt);
      const day = date.getDate();
      const weekday = date.getDay();
  
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const dayOfWeekName = daysOfWeek[weekday];
  
      if (action === 'daily') {
        return <span>{dayOfWeekName}</span>;
      } else {
        return <span>{date.getHours().toString().padStart(2, '0')}</span>;
      }
    }
    
    // Group forecast data by day
    const dailyForecast = city.city?.list.reduce((acc, day) => {
      const date = new Date(day.dt_txt);
      const weekday = date.getDay();
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const dayOfWeekName = daysOfWeek[weekday];
      
      const existingDay = acc.find((item) => item.dayOfWeek === dayOfWeekName);
    
      if (existingDay) {
        existingDay.minTemp = Math.min(existingDay.minTemp, day.main.temp_min);
        existingDay.maxTemp = Math.max(existingDay.maxTemp, day.main.temp_max);
      } else {
        acc.push({
          date: date,
          weather: day.weather[0].description,
          minTemp: day.main.temp_min,
          maxTemp: day.main.temp_max,
          dayOfWeek: dayOfWeekName
        });
      }
      
      return acc;
    }, []);

  return (
      <>
        <Row className="g-0 bg-glassy p-3 rounded-4 mt-5 mb-3" >
          <div className="d-flex  border-bottom pb-2 opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-clock align-self-center" viewBox="0 0 16 16">
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
      </svg> 
      <span className="text-light ms-1"  style={{ fontSize: '13px' }}>HOURLY FORECAST</span>
          </div>
        {
          city.city?.list.slice(0, 8).map((hour, index) => {
            return (
              <Col key={index} style={{ fontSize: '14px' }} className=" pt-3">
                {index === 0 ? (
                  <div className="text-center">
                    <div>
                    <p style={{fontWeight:"700"}}>Now</p>
                    <p>
                        {getWeatherIcon(hour.weather[0].description)}
                    </p>
                    <p  style={{ fontSize: '18px' }}>{hour.main.temp.toFixed(0)} °</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                            <p>{FormatData(hour.dt_txt)}</p>
                            <p>
                            {getWeatherIcon(hour.weather[0].description)}
                            </p>
                            <p  style={{ fontSize: '18px' }}>{hour.main.temp.toFixed(0)} °</p>
                  </div>
                )}
              </Col>
            );
          })
          
        }
      </Row>
      <Row className="g-0 bg-glassy p-3 rounded-4 mb-3">
        <Col>
          <div className="d-flex border-bottom pb-2 opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
              <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
              <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>
            <span className="text-light ms-1" style={{ fontSize: '13px' }}>DAILY FORECAST</span>
          </div>
          {Object.values(dailyForecast).map((day, index) => (
            <Row className="align-items-center my-2" key={index}>
              <Col xs={3}>
                {index === 0 ? (
                  <span>Today</span>
                ) : (
                  <span>{FormatData(day.date, 'daily')}</span>
                )}
              </Col>
              <Col xs={3} >
                <span>{getWeatherIcon(day.weather)}</span>
              </Col>
              <Col xs={6}>
                <div className="d-flex justify-content-start align-items-center">
                  <div className="m-auto">
                  <span style={{ fontSize: '16px'}}>{day.minTemp.toFixed(0)}°</span>
                  </div>
                  <div className="m-auto">
                  <input
                    min="-40"
                    max="60"
                    defaultValue={(((day.minTemp) + (day.maxTemp)) / 2).toFixed(0)}
                    type="range"
                    name="range"
                    className="temperature-range "
                    disabled
                    style={{ width: "100px" }}
                  />
                  </div>
                 <div className="m-auto">
                 <span style={{ fontSize: '16px'}}>{day.maxTemp.toFixed(0)}°</span>
                 </div>
                </div>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
      <Row className="g-0 bg-glassy p-3 rounded-4 mb-3">
      <h6 className="text-light border-bottom pb-2 opacity-50"  style={{ fontSize: '13px' }}>AIR QUALITY</h6>
      <AirQuality/>
      </Row>
      </>
  );
}

export default RenderDetailPage;

