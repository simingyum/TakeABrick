import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

function ListOfParts({ parts }) {
  const [favParts, setFavParts] = useState([]);

  const addAPart = (event) => {
    alert("Added to your list!");
    console.log('add to account: ', event.target.id);

  }

  return (
    <Container>
    {
      parts.length === 0 ?
      <div>Parts information is unabailable.</div> :
      <Row xs={1} md={4} lg={6} className="g-3">
        {
          parts.map((part) => {
            return (
              <Col key={part.id}>
              <CardGroup>
                <Card
                  className='text-center'
                  style={{ width: '2rem', height: '10rem'}}
                  text='secondary'
                  border='warning'
                >
                  <Card.Img
                    variant="top"
                    style={{width: "100%", height: "60%", objectFit: "contain"}}
                    src={part.part.part_img_url}
                  />
                  <Card.ImgOverlay style={{padding: '0', textAlign: 'right'}}>
                    <div>
                      <CornerButton id={part.id} onClick={addAPart}>&#43;</CornerButton>
                    </div>
                  </Card.ImgOverlay>
                  <Card.Body>
                    {part.quantity} X {part.part.part_num}
                  </Card.Body>
                </Card>
              </CardGroup>
              </Col>
            )
          })
        }
      </Row>
    }
    </Container>
  );
}

export default ListOfParts;

const CornerButton = styled.button`
  border: none;
  font-size: 1.8rem;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  color: #7F8487;
  cursor: pointer;
`;
