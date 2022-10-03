import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import SetCard from './SetCard.jsx';
const axios = require('axios');
const urlLink = 'http://localhost:3001';

function Account () {
  const [addedParts, setAddedParts] = useState([]);
  const [addedSets, setAddedSets] = useState([]);

  useEffect(() => {
    axios.get(`${urlLink}/accounts`)
    .then((result) => {
      // console.log('what is being fatched: ', result.data[0]);
      setAddedParts(result.data[0].favParts);
      setAddedSets(result.data[0].favSets);
    })
    .catch((err) => {
      console.log('Error on data fatching from accounts for favParts in account page');
      console.log(err);
    })
  }, []);

  console.log(addedParts);
  return (
    <Container>
      <Row>You have {addedSets.length} sets and {addedParts.length} parts in your list.</Row>
      <br />
      <br />
      <Row>
        <Tabs id="controlled-tab-example " className="mb-3">
          <Tab eventKey="set" title='Favorite Sets'>
          <Container>
            <Row xs={1} s={2} md={4} className="g-4">
              {
                addedSets.map(({set_num, name, year, num_parts, set_img_url}) => {
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
          </Tab>
          <Tab eventKey="part" title="Added Parts">
          <Table striped responsive>
            <thead>
              <tr>
                <StyledHeader>Picture</StyledHeader>
                <StyledHeader>Name</StyledHeader>
                <StyledHeader>Part Number</StyledHeader>
                <StyledHeader>Alternates</StyledHeader>
                <StyledHeader>LEOG id</StyledHeader>
              </tr>
            </thead>
            <tbody>
              {
                addedParts.map((part) => {
                  return (
                    <tr height="5rem" key={part.part_num}>
                      <StyledCell width="15%">
                        <img src={part.part_img_url} alt='apiImg' style={{height: '5rem', width: '5rem'}}></img>
                      </StyledCell>
                      <StyledCell width="15%">{part.name}</StyledCell>
                      <StyledCell width="20%">{part.part_num}</StyledCell>
                      <StyledCell width="25%">
                        {part.alternates.length !== 0 &&
                        part.alternates.map((alt) => ( <StyleParg>{alt}</StyleParg> ))}
                      </StyledCell>
                      <StyledCell width="25">
                        {part.external_ids.LEGO !== undefined &&
                         part.external_ids.LEGO.map((id) => ( <StyleParg>{id}</StyleParg> ))}
                      </StyledCell>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  )
}

export default Account;

const StyledCell = styled.td`
  padding: 1.5rem 0rem;
  text-align: center;
`;

const StyledHeader = styled.th`
  padding: 1.5rem 0rem;
  text-align: center;
`;

const StyleParg = styled.p`
  margin: 0;
`;