import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBarDark from './components/MyNav';
import FooterDark from './components/MyFooter';
import {Container, Row} from 'react-bootstrap/';
import Jumbotron from './components/Welcome';
import Lista from './components/AllTheBooks';

function App() {

  return (
    <>
      <NavBarDark />
      <Container style={{ minHeight: '85vh' }}>
        <Row>
          <Jumbotron />
        </Row>
        <Row>
          <Lista />
        </Row>
      </Container>
      <FooterDark />
    </>
  )
}

export default App
