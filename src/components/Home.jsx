import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import ThemeCard from './ThemeCard.jsx';

function Home ({ allThemes, searchTheme }) {
  const selectTheme = (event) => {
    searchTheme(event);
  }

  return (
    <Container>
        <Row>
          <Col sm={2}>
            <h4>Popular Themes</h4>
            {allThemes.map((theme) => {
              if (theme.popular) {
                return (
                  <div key={theme.id} id={theme.id} onClick={selectTheme} >
                    {theme.name}
                  </div>
                )
              }
            })}
          </Col>
          <Col sm={10}>
            <ThemeCard allThemes={allThemes} onClick={selectTheme} />
          </Col>
        </Row>
      </Container>
  );
}

export default Home;