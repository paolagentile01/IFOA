import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



function CityCard({city}){
    const navigate = useNavigate();

    return(
        <Row>
            <Col>
            { city? (
                <div className="card h-200 bg-info mt-4 p-5" onClick={(() => navigate('/'))}>
                <h3>{city.city.name}</h3>
                <p>{city.city.population}</p>
                </div>
                
                ): (null)

            }

            </Col>
        </Row>
    )
}

export default CityCard;