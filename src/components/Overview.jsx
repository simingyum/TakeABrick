import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

function Overview ({ overview, addASet }) {
  const [favSets, setFavSets] = useState([]);

  const clickSet = (event) => {
    addASet(event);
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
            <CornerButton id={overview.set_num} onClick={clickSet}>&#10084;</CornerButton>
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
  font-size: 1.8rem;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  color: #7F8487;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;