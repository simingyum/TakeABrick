import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import './App.css';

import React, { useState, useEffect } from 'react';
const axios = require('axios');
const urlLink = 'http://localhost:3001';

function App() {
  const [themes, setThemes] = useState(['Architecture', 'Batman','Creator', 'Disney', 'Harry Potter', 'Ideas', 'Jurassic World', 'Modular Buildings', 'Star Wars']);
  const [allThemes, setAllThemes] = useState([]);

  useEffect(() => {
    axios.get(`${urlLink}/themes`)
      .then((result) => {
        console.log('what are the themes', result.data);
        setAllThemes(() => ( [...result.data] ));
      })
      .catch((err) => {
        console.log('Initial data fetch error: ');
        console.log(err);
      });
  }, []);

  const searchTheme = (event) => {
    console.log('i got clicked');
    console.log(event.target.id)
  }

  return (
    <>
      <Navbar bg="warning" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Take A Brick</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Themes</Nav.Link>
              <NavDropdown title="Themes" id="basic-nav-dropdown">
                {allThemes.map(theme => {
                  return(
                    <NavDropdown.Item href="#action/3.1">
                      {theme.name}
                    </NavDropdown.Item>
                  )
                })}
                {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  All Themes
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search sets"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-secondary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br></br>
      <Container>
        <Row>
          <Col sm={4}>
            <h4>Popular Themes</h4>
            {themes.map((theme) => {
              return (
                <div id={theme} onClick={searchTheme}>{theme}</div>
              )
            })}
          </Col>
          <Col sm={8}>rows of different themes: sm=4</Col>
        </Row>
        <Row>
          {/* <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col> */}
        </Row>
      </Container>
    </>
  );
}

export default App;
