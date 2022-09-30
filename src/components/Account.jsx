import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

function Account () {
  const [addedParts, setAddedParts] = useState([]);

  useEffect(() => {
    const addedParts = JSON.parse(localStorage.getItem('favParts'));
    if (addedParts) {
      setAddedParts(addedParts);
    }
  }, []);

  console.log(addedParts);
  return (
    <Container>
      <Row>You have nothing in your list</Row>
      <br />
      <br />
      <Row>
        <Tabs id="controlled-tab-example " className="mb-3">
          <Tab eventKey="set" title='Favorite Sets'>
          <Table striped responsive>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Part Number</th>
                <th>Alternates</th>
                <th>LEOG id</th>
              </tr>
            </thead>
            <tbody>
              {
                addedParts.map((part) => {
                  return (
                    <tr height="5rem">
                      <td width="">
                        <img src={part.part_img_url} alt='apiImg' style={{height: '5rem', width: '5rem'}}></img>
                      </td>
                      <td width="15%">{part.name}</td>
                      <td width="15%">{part.part_num}</td>
                      <td width="35%">
                        {part.alternates.length !== 0 &&
                        part.alternates.map((alt) => ( <p>{alt}</p> ))}
                      </td>
                      <td width="">{part.external_ids.LEGO}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
          </Tab>
          <Tab eventKey="part" title="Added Parts">
          </Tab>
        </Tabs>
      </Row>
    </Container>
  )
}

export default Account;

const StyledCell = styled.td`

`;