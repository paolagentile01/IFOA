import { Container} from 'react-bootstrap';
import MovieCard from '../../components/MovieCard';

import { useState } from 'react';

function RenderPage(props) {
console.log(props.category)
  const [searchUser, setSearch] = useState(["Horror", "Black", "Marvel"]);

  return (
     <Container fluid>

    {searchUser.map((search, index) => {
    return(
      <div key={index} >
        <h3 className='mt-4'>{search}</h3>
      <MovieCard  category={props.category} search={search}/>
      </div >
     
    );})}
        </Container>
  );
}


export default RenderPage;