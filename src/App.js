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
import { Routes, Route } from "react-router-dom";
import ThemeCard from './components/ThemeCard.jsx';
import Home from './components/Home.jsx';
import Theme from './components/Theme.jsx';
const axios = require('axios');
const urlLink = 'http://localhost:3001';

function App() {
  const [allThemes, setAllThemes] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState();

  useEffect(() => {
    axios.get(`${urlLink}/themes`)
      .then((result) => {
        // console.log('what are the themes', result.data);
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
    setSelectedTheme(event.target.id);
  }

  return (
    <>
      <Navbar bg="warning" expand="lg" sticky='top'>
        <Container>
          <Navbar.Brand href="/">Take A Brick</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Themes" id="basic-nav-dropdown">
                <div style={{ height: "30vh", overflowY: "auto" }}>
                  {allThemes.map(theme => {
                    return(
                      <NavDropdown.Item href={`/theme/${selectedTheme}`} id={theme.id} onClick={searchTheme}>
                        {theme.name}
                      </NavDropdown.Item>
                    )
                  })}
                </div>
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
      <Routes>
        <Route path="/" element={<Home allThemes={allThemes} searchTheme={searchTheme}/>} />
        <Route path="/theme/:id" element={<Theme selectedTheme={selectedTheme}/>} />
      </Routes>
      {/* <Container>
        <Row>
          <Col sm={2}>
            <h4>Popular Themes</h4>
            {allThemes.map((theme) => {
              if (theme.popular) {
                return (
                  <div key={theme.id} id={theme.id} onClick={searchTheme}>
                    {theme.name}
                  </div>
                )
              }
            })}
          </Col>
          <Col sm={10}>
            <ThemeCard allThemes={allThemes} searchTheme={searchTheme}/>
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default App;
