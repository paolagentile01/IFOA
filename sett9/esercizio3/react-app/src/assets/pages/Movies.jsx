/* import { Container} from 'react-bootstrap';
import MovieCard from '../../components/MovieCard';

import { useState } from 'react';

function MoviesPage() {
  const category = "movie";
  const [searchUser, setSearch] = useState(["Pirates", "Marvel", "Harry Potter"]);

  return (
     <Container fluid>

    {searchUser.map((search, index) => {
    return(
      <div key={index} >
        <h3 className='mt-4'>{search}</h3>
      <MovieCard category={category} search={search}/>
      </div >
     
    );})}
        </Container>
  );
}


export default MoviesPage; */

import Container from 'react-bootstrap/Container';
import RenderPage from './RenderPage';

function MoviesPage() {
  const category = "movie";
  return (
    <>
        <Container fluid>
            <h1>Tv Shows Page</h1>
            <RenderPage category={category}/>
        </Container>
    </>
  );
}

export default MoviesPage;