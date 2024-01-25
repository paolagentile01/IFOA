import { Row, Col } from "react-bootstrap";
import { getWeatherIcon } from "./getWeatherIcons";
import AirQuality from "./AirQuality";

function RenderDetailPage({city, todayData}) {
  console.log(city.city.city.timezone);

  function FormatData(dt_txt, action, timeZoneShift) {
    const date = new Date(dt_txt);
  
    // Convert the timezone shift from seconds to milliseconds
    const timeZoneOffsetMilliseconds = timeZoneShift * 1000;
  
    // Adjust the date by adding the timezone offset
    date.setTime(date.getTime() + timeZoneOffsetMilliseconds);
  
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
    const dailyForecast = city.city?.list.reduce((acc, day) => { //this function is used to calculate the weekly forecast because it is not available in the API (collects data for each day and calculates their minimum and maximum temperature)
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

  return (  // this displays both the hourly forecats of the day and the weekly forecast
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
                            <p>{FormatData(hour.dt_txt, null, city.city.city.timezone)}</p>
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
          <div className="d-flex border-bottom pb-2 opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
              <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
              <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>
            <span className="text-light ms-1" style={{ fontSize: '13px' }}>DAILY FORECAST</span>
          </div>
          {Object.values(dailyForecast).map((day, index) => (
          (index === 0) ?
            <Row className="align-items-center mx-0 px-0 py-2 custom-border-opacity" key={index}>
              <Col xs={3}>
                <span>Today</span>
              </Col>
              <Col xs={3} className="text-center">
                <span>{getWeatherIcon(day.weather)}</span>
              </Col>
              <Col xs={6}>
                <Row className=" align-items-center">
                  <Col xs={1} className="m-auto">
                    <span style={{ fontSize: '16px' }}>{todayData.temp_min.toFixed(0)}°</span>
                  </Col>
                  <Col xs={6} className="ms-auto">
                    <input
                      min="-30"
                      max="30"
                      defaultValue={(((todayData.temp_min + todayData.temp_max)) / 2).toFixed(0)}
                      type="range"
                      name="range"
                      className="temperature-range"
                      disabled
                      style={{ width: "100%" }}
                    />
                  </Col>
                  <Col xs={3} className="m-auto">
                    <span style={{ fontSize: '16px' }}>{todayData.temp_max.toFixed(0)}°</span>
                  </Col>
                </Row>
              </Col>
            </Row>
          :
            <Row className="align-items-center mx-0 px-0 py-2 custom-border-opacity" key={index}>
              <Col xs={3}>
                <span>{FormatData(day.date,'daily', city.city.city.timezone)}</span>
              </Col>
              <Col xs={3} className="text-center">
                <span>{getWeatherIcon(day.weather)}</span>
              </Col>
              <Col xs={6}>
                <Row className="align-items-center ">
                  <Col xs={1} className="m-auto ">
                    <span style={{ fontSize: '16px' }}>{day.minTemp.toFixed(0)}°</span>
                  </Col>
                  <Col xs={6} className="ms-auto">
                    <input
                      min="-30"
                      max="30"
                      defaultValue={(((day.minTemp) + (day.maxTemp)) / 2).toFixed(0)}
                      type="range"
                      name="range"
                      className="temperature-range"
                      disabled
                      style={{ width: "100%" }}
                    />
                  </Col>
                  <Col xs={3} className="m-auto">
                    <span style={{ fontSize: '16px' }}>{day.maxTemp.toFixed(0)}°</span>
                  </Col>
                </Row>
              </Col>
            </Row>
        ))}
      </Row>
      <Row className="g-0 bg-glassy p-3 rounded-4 mb-3">
        <div className="d-flex align-items-center border-bottom pb-2 mb-2 opacity-50 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fan" viewBox="0 0 16 16">
      <path d="M10 3c0 1.313-.304 2.508-.8 3.4a2 2 0 0 0-1.484-.38c-.28-.982-.91-2.04-1.838-2.969a8 8 0 0 0-.491-.454A6 6 0 0 1 8 2c.691 0 1.355.117 1.973.332Q10 2.661 10 3m0 5q0 .11-.012.217c1.018-.019 2.2-.353 3.331-1.006a8 8 0 0 0 .57-.361 6 6 0 0 0-2.53-3.823 9 9 0 0 1-.145.64c-.34 1.269-.944 2.346-1.656 3.079.277.343.442.78.442 1.254m-.137.728a2 2 0 0 1-1.07 1.109c.525.87 1.405 1.725 2.535 2.377q.3.174.605.317a6 6 0 0 0 2.053-4.111q-.311.11-.641.199c-1.264.339-2.493.356-3.482.11ZM8 10c-.45 0-.866-.149-1.2-.4-.494.89-.796 2.082-.796 3.391q0 .346.027.678A6 6 0 0 0 8 14c.94 0 1.83-.216 2.623-.602a8 8 0 0 1-.497-.458c-.925-.926-1.555-1.981-1.836-2.96Q8.149 10 8 10M6 8q0-.12.014-.239c-1.02.017-2.205.351-3.34 1.007a8 8 0 0 0-.568.359 6 6 0 0 0 2.525 3.839 8 8 0 0 1 .148-.653c.34-1.267.94-2.342 1.65-3.075A2 2 0 0 1 6 8m-3.347-.632c1.267-.34 2.498-.355 3.488-.107.196-.494.583-.89 1.07-1.1-.524-.874-1.406-1.733-2.541-2.388a8 8 0 0 0-.594-.312 6 6 0 0 0-2.06 4.106q.309-.11.637-.199M8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
      </svg>
      <span className="ms-1" style={{ fontSize: '13px' }}>AIR QUALITY</span>
        </div>
      <AirQuality/> 
      </Row>
      </>
  );
}

export default RenderDetailPage;

