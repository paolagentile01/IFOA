import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


function NotFound(){


    return(
        <Container fluid className="app p-5">
            <Row>
            <h1 className="mb-5 display-3">Opsss! Error 404!<br/>
              Page Not Found</h1>

                
            </Row>
            <Link to="/" className="btn btn-info">Go to Home</Link>
        </Container>
    )
}

export default NotFound;