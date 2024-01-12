import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarDark from './components/NavbarDark'
import FooterDark from './components/FooterDark';
import RenderAllGalleries from './components/AllGalleries';
import LowNavDark from './components/LowNav';
import { Container, Row } from "react-bootstrap";
function App() {

  return (
    < >
    <Container fluid>
     <NavbarDark/>
     <LowNavDark/>
      <RenderAllGalleries />
    </Container>
    <FooterDark />
    </>
  )
}

export default App
