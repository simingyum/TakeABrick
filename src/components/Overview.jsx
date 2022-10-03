import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
const axios = require('axios');
const urlLink = 'http://localhost:3001';

function Overview ({ overview, addASet }) {
  const [favSets, setFavSets] = useState([]);

  useEffect(() => {
    axios.get(`${urlLink}/accounts`)
     .then((result) => {
       // console.log('what is being fatched: ', result.data[0]);
       setFavSets(result.data[0].favSets);
     })
     .catch((err) => {
       console.log('Error on data fatching from accounts for favSets');
       console.log(err);
     })
   }, []);

  const clickASet = (event) => {
    // console.log('set add to account: ', event.target.id);
    let selectedSet = event.target.id;
    let alreadyAdded = false;

    favSets.map((set) => {
      if(set.set_num === selectedSet) {
        alreadyAdded = true;
      }
    });
    if (!alreadyAdded) {
      setFavSets((favSets) => ([...favSets, overview]));
      axios.post(`${urlLink}/accounts/sets`, {
        id: 1,
        favSets: overview
      })
        .catch((err) => {
          console.log('Error on posting to db: ', err);
        });
    } else {
      alert('Item is already in your list.');
    }
  }

  return (
    <Container>
      <h2>{overview.name}</h2>
      <Row>
        <Col sm={9}>
          <ImgContainer>

          <img src={overview.set_img_url} alt="apiImg"
            style={{width: "100%", height: "100%", objectFit: "contain"}}
            ></img>
          <div>
            <CornerButton id={overview.set_num} onClick={clickASet}>&#10084;</CornerButton>
          </div>
          </ImgContainer>
        </Col>
        <Col sm={3} style={{position: 'relative'}}>
          <Table style={{position: 'absolute', top: '10%'}}>
            <thead>
              <tr>
                <th colSpan='2'>{overview.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Set Number: </td>
                <td>{overview.set_num}</td>
              </tr>
              <tr>
                <td>Year Released: </td>
                <td>{overview.year}</td>
              </tr>
              <tr>
                <td>Number of Parts: </td>
                <td>{overview.num_parts}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default Overview;

export const ImgContainer = styled.div`
  position: relative;
`;

const CornerButton = styled.button`
  border: none;
  font-size: 2.3rem;
  font-weight: bold;
  color: red;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;