import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


function CityCard({citySearched}){

    const navigate = useNavigate();
    return(
        <Row>
            <Col>
                <div className="card h-200 bg-info mt-4 p-5" onClick={(() =>  navigate(`/details/${citySearched.city.name}`))}>
                <h3>{citySearched.city?.name}</h3>
                <Link className="btn btn-sm btn-primary btn-sm" to='/details' city={citySearched}>Discover More</Link>
                </div>
            </Col>
        </Row>
    )
}

export default CityCard;