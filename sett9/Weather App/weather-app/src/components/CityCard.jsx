import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function CityCard({citySearched}){

    const navigate = useNavigate();
    return(
        <Row>
            <Col>
                <div className="card h-200 bg-info mt-4 p-5" >
                <h3>{citySearched.city?.name}</h3>
                <Button  onClick={(() =>  navigate(`/details/${citySearched.city.name}`))} className="btn btn-sm btn-primary btn-sm" city={citySearched}>Discover More</Button>
                </div>
            </Col>
        </Row>
    )
}

export default CityCard;