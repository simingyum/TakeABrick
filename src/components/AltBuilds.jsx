import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function AltBuilds ({ alternatives }) {

  return (
    <Container>
    <Row xs={1} md={4} className="g-3">
      { alternatives.length === 0 ?
        <div>No alternative build found for this set. </div> :
        alternatives.map((build) => {
          return (
            <Col key={build.id}>
            <CardGroup>
              <Card
                // className='text-center'
                style={{ width: '20rem', height: '25rem'}}
                text='secondary'
                border='warning'
              >
                <Card.Img
                  variant="top"
                  style={{width: "100%", height: "70%", objectFit: "contain"}}
                  src={build.moc_img_url}
                />
                <Card.Body>
                  <Card.Title>{build.name}</Card.Title>
                  <Card.Text>by
                    <a href={build.designer_url} target='_blank'>{build.designer_name}</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
            </Col>
          )
        })
      }
    </Row>
    </Container>
  )
}

export default AltBuilds;