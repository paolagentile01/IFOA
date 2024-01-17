import Container from 'react-bootstrap/Container';
import RenderPage from './RenderPage';

function TvShowsPage() {
  const category = "series";
  return (
    <>
        <Container fluid>
            <h1>Tv Shows Page</h1>
            <RenderPage category={category}/>
        </Container>
    </>
  );
}

export default TvShowsPage;

