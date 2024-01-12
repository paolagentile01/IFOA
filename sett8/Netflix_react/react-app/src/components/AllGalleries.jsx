import SingleGallery from "./Galleria";
import { Col, Row, Container } from "react-bootstrap";

function RenderAllGalleries() {
const saga = ['Marvel','Harry Potter', 'Star Wars'];

return(

    <>
      {saga.map((saga) => (
        <div key={saga}>
            <Container fluid>
            <h4 className="text-white mt-4 mb-3">{saga}</h4>
                <div>
                <SingleGallery saga={saga} key={saga} />
                </div>
            </Container>
        </div>
      ))}
    </>
)

}


export default RenderAllGalleries;