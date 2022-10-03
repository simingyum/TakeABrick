import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SetCard from './SetCard.jsx';
const axios = require('axios');
const urlLink = 'http://localhost:3001';

function Search () {
  const [searchResult, setSearchResult] = useState([]);

  const location = useLocation()
  const { from } = location.state;

  console.log('what was being searched? ', from);

  useEffect(() => {
    axios.get(`${urlLink}/sets`, {
      params: {
        search: from
      }
    })
    .then((result) => {
      // console.log(result.data.results);
      setSearchResult(() => ([...result.data.results]))
    })
    .catch(err => {
      console.log('data fetch error in theme page: ')
      console.log(err);
    })
  }, [from])

  return (
    <Container>
        <Row xs={1} s={2} md={4} className="g-4">
          { searchResult.length === 0 ?
            <div>Sorry, we couldn't find any results</div> :
            searchResult.map(({set_num, name, year, num_parts, set_img_url}, index) => {
              return(
                index <= 50 &&
                <SetCard key={set_num}
                  set_num={set_num}
                  name={name}
                  year={year}
                  parts={num_parts}
                  img={set_img_url}
                />
              )
            })
          }
        </Row>
        <br></br>
        <br></br>
        <br></br>
      </Container>
  )
}

export default Search;