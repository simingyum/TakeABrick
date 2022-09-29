import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import SetCard from './SetCard.jsx';
const axios = require('axios');
const urlLink = 'http://localhost:3001';

function Theme ({ selectedTheme }) {
  const params = useParams();
  const [theme, setTheme] = useState(params.id);
  const [sets, setSets] = useState([]);

  useEffect(() => {
    axios.get(`${urlLink}/sets`, {
      params: {
        theme_id: theme
      }
    })
    .then((result) => {
      console.log(result.data);
      setSets(() => ([...result.data.results]))
    })
    .catch(err => {
      console.log('data fetch error in theme page: ')
      console.log(err);
    })
  }, [theme])

  return (
    <Container>
        <Row xs={1} s={2} md={4} className="g-4">
          {
            sets.map(({set_num, name, year, num_parts, set_img_url}) => {
              return(
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
      </Container>
  );
}

export default Theme;