import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

function NavDark() {

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Netflix</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/" category="home">Home</Link>
            <Link className="nav-link" to="/movies" category="movie">Movies</Link>
            <Link className="nav-link" to="/tvshows" ctaegory="shows">Tv Shows</Link>
          </Nav>
        </Container>
      </Navbar>



    </>
  );
}

export default NavDark;