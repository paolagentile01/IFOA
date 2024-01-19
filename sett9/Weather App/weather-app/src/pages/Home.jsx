import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';



function RenderHomePage(){


    return(
        <Container>
            <Row>
                <h1>Home</h1>
            </Row>
            <Link to="/search" className="btn btn-info">Go to Search</Link>
        </Container>
    )
}

export default RenderHomePage;