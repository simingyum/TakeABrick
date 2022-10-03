import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Overview from './Overview.jsx';
import ListOfParts from './ListOfParts.jsx';
import AltBuilds from './AltBuilds.jsx';
const axios = require('axios');
const urlLink = 'http://localhost:3001';

function SetDetails () {
  const params = useParams();
  const [overview, setOverview] = useState({});
  const [parts, setParts] = useState([]);
  const [partCount, setPartCount] = useState();
  const [alternatives, setAlternatives] = useState([]);

  useEffect(() => {
    axios.get(`${urlLink}/sets/${params.id}`)
      .then((result) => {
        // console.log('parts result: ', result);
        setOverview(() => ({...result.data}));
      })
      .catch((err) => {
        console.log('Error on data fetching for set details:');
        console.log(err);
      });

    axios.get(`${urlLink}/sets/${params.id}/parts`)
      .then((result) => {
        // console.log('parts result: ', result);
        setParts(() => ( [...result.data.results] ));
        setPartCount(result.data.count);
      })
      .catch((err) => {
        console.log('Error on data fetching for set details:');
        console.log(err);
      });

    axios.get(`${urlLink}/sets/${params.id}/alternates`)
    .then((result) => {
      // console.log('alternative builds result: ', result);
      setAlternatives(() => ( [...result.data.results] ))
    })
    .catch((err) => {
      console.log('Error on data fetching for set details:');
      console.log(err);
    });

  }, [params.id]);

  return (
    <Container>
      <Row>
        <Overview overview={overview}/>
      </Row>
      <br />
      <br />
      <Row>
        <Tabs
          id="controlled-tab-example "
          // activeKey={key}
          // onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="parts" title='Parts'>
            <ListOfParts parts={parts} />
          </Tab>
          <Tab eventKey="profile" title="Alternative Builds">
            <AltBuilds alternatives={alternatives}/>
          </Tab>
        </Tabs>
      </Row>
      <br></br>
      <br></br>
      <br></br>
    </Container>

  )
}

export default SetDetails;