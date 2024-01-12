import logo from '../images/logo.png';
import avatar from '../images/avatar.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

function NavbarDark () {
    return(
        <Container fluid>
        <Navbar
        expand="lg"
        variant="dark"
        >
        <Navbar.Brand href="#">
            <img src={logo} style={{ width: "120px", marginLeft: "-6px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent" className='justify-content-between '>
            <Nav className="mr-auto">
            <Nav.Link href="#" className="font-weight-bold" >
                Home 
            </Nav.Link>
            <Nav.Link href="#" className="font-weight-bold" active>
                TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="font-weight-bold">
                Movies
            </Nav.Link>
            <Nav.Link href="#" className="font-weight-bold">
                Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="font-weight-bold">
                My List
            </Nav.Link>
            </Nav>

            <div>
            <i className="fa fa-search icons"></i>
            <span className=" text-white">KIDS</span>
            <i className="fa fa-bell icons me-4"></i>
            <img src={avatar} alt={avatar} height={30}/>
            </div>

        </Navbar.Collapse>
        </Navbar>
      </Container>
    )
}


export default NavbarDark;