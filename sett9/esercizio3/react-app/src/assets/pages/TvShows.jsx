import Container from 'react-bootstrap/Container';
import RenderPage from './RenderPage';
import MoviesDetails from './MovieDetails';

function TvShowsPage() {
  const category = "tv";
  return (
    <>
        <Container fluid>
            <h1>Tv Shows Page</h1>
            {/* <RenderPage category={category}/> */}
            <MoviesDetails category={category}/>
        </Container>
    </>
  );
}

export default TvShowsPage;

