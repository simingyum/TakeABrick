import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";

function ThemeCard({ allThemes }) {

  return (
    <Container>
    <Row xs={1} s={2} md={4} className="g-2">
      {
        allThemes.map((theme) => {
          return (
            <Col key={theme.id}>
            <Link to={`/theme/${theme.id}`} style={{ textDecoration: 'none' }}>
            <CardGroup>
              <Card
                style={{ width: '18rem', height: '20rem'}}
                text='secondary'
                border='warning'
                id={theme.id}
              >
                <Card.Img
                  variant="top"
                  style={{width: "100%", height: "100%", objectFit: "contain"}}
                  src={theme.image_url} id={theme.id}
                />
                <Card.Footer
                  id={theme.id}
                  style={{backgroundColor: '#FFB200', fontWeight: 'bold'}}
                >
                  {theme.name}
                </Card.Footer>
              </Card>
            </CardGroup>
            </Link>
            </Col>
          )
        })
      }
    </Row>
    </Container>
  );
}

export default ThemeCard;