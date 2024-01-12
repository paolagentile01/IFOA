
import { Button, Container, Dropdown} from "react-bootstrap";

function LowNavDark () {
    return (
      <Container fluid>
        <div className="align-items-center d-flex justify-content-between">
          <div className="d-flex">
            <h2 className=" me-4">TV Shows</h2>
            <Dropdown className="ml-4 mt-1">
              <Dropdown.Toggle
                variant="secondary"
                size="sm"
                className="rounded-0"
                style={{ backgroundColor: '#221f1f' }}
              >
                Genres &nbsp;
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-dark">
                <Dropdown.Item className="text-white bg-dark" href="#">
                  Comedy
                </Dropdown.Item>
                <Dropdown.Item className="text-white bg-dark" href="#">
                  Drama
                </Dropdown.Item>
                <Dropdown.Item className="text-white bg-dark" href="#">
                  Thriller
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div >
            <Button variant="dark" className="rounded-0">
            <i class="fa fa-th-large icons"></i>
            </Button>
            <Button variant="dark" className="rounded-0">
            <i class="fa fa-th icons"></i>
            </Button>
 
          </div>
        </div>
      </Container>
    );
  };

export default LowNavDark;