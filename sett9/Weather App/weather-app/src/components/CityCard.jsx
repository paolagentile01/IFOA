import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


function CityCard({city}){
    const navigate = useNavigate();

    return(
        <Row>
            <Col>
            { city? (
                <div className="card h-200 bg-info mt-4 p-5" onClick={(() =>  navigate(`/details/${city.city.name}`))}>
                <h3>{city.city.name}</h3>
                <Link className="btn btn-sm btn-primary btn-sm" to='/details' city={city}>Discover More</Link>
                </div>
                
                ): (null)

            }

            </Col>
        </Row>
    )
}

export default CityCard;