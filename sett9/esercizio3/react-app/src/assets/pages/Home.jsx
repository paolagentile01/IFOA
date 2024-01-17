import Container from 'react-bootstrap/Container';
import RenderPage from './RenderPage';


function HomePage() {
  const category = "movie";
  return (
    <>
        <Container fluid>
            <h1 >Home Page</h1>
            <RenderPage category={category}/>
        </Container>
    </>
  );
}

export default HomePage;