import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

const FullscreenModal = ({ show, handleModal, airData }) => {
  const [isModalVisible, setIsModalVisible] = useState(false); 
console.log(airData);

useEffect(() => {
    setIsModalVisible(show); // takes the value of show and controls the modal visibility
  }, [show]);

/*     const co =  <span>{airData.co} </span>;
    const nh3 = airData.nh3;
    const no = airData.no;
    const no2 = airData.no2;
    const o3 = airData.o3;
    const pm2_5 = airData.pm2_5;
    const pm10 = airData.pm10;
    const so2 = airData.so2; */

  return (
    <>
        {
        isModalVisible && airData ?( //if isModalVisible is true AND airData is true( FULLY LOADED ) it will show the following description with all the information about AIR COMPONENTS CONCENTRATION
            <div>
            <div  fullscreen={true}>
   
                <p className="text-whuite" style={{fontSize:"13px"}}>
                Сoncentration of CO (Carbon monoxide), <span>{airData.co} </span> μg/m3 <br />
                Сoncentration of NH3 (Ammonia), <span>{airData.nh3} </span>  μg/m3 <br />
                Сoncentration of NO (Nitrogen monoxide), <span>{airData.no} </span>  μg/m3 <br />
                Сoncentration of NO2 (Nitrogen dioxide), <span>{airData.no2} </span>  μg/m3 <br />
                Сoncentration of O3 (Ozone), <span>{airData.o3} </span> μg/m3 <br />
                Сoncentration of PM2.5 (Fine particles matter), <span>{airData.pm2_5} </span>  μg/m3 <br />
                Сoncentration of PM10 (Coarse particulate matter), <span>{airData.pm10} </span> μg/m3 <br />
                Сoncentration of SO2 (Sulphur dioxide), <span>{airData.so2} </span>  μg/m3 <br />
                </p>
            </div>
          </div>
        ):null
    }
    </>
  );
};

export default FullscreenModal;