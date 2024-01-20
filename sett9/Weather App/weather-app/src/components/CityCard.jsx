import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


function CityCard({citySearched}){
    console.log(citySearched)
    const navigate = useNavigate();
    return(
        <Row>
            <Col>
            { citySearched? (
                <div className="card h-200 bg-info mt-4 p-5" onClick={(() =>  navigate(`/details/${citySearched.city.name}`))}>
                <h3>{citySearched.city?.name}</h3>
                <Link className="btn btn-sm btn-primary btn-sm" to='/details' city={citySearched}>Discover More</Link>
                </div>
                
                ): (null)

            }

            </Col>
        </Row>
    )
}

export default CityCard;