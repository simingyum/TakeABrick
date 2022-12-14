import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home.jsx';
import Theme from './components/Theme.jsx';
import SetDetails from './components/SetDetails.jsx';
import Account from './components/Account.jsx';
import Search from './components/Search.jsx';
const axios = require('axios');
const urlLink = 'http://localhost:3001';

function App() {
  const [allThemes, setAllThemes] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState();
  const [searchTerm, setSearchTerm] = useState();

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
    // console.log('i got clicked');
    // console.log(event.target.id)
    setSelectedTheme(event.target.id);
  }

  const searchSet = (event) => {
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
  }

  return (
    <>
    <Navbar bg="warning" expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand href="/" style={{fontSize: '2rem', color: '#383838'}}>GimMeA Brick</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Themes" id="basic-nav-dropdown">
              <div style={{ height: "30vh", overflowY: "auto" }}>
                {allThemes.map(theme => {
                  return(
                    <NavDropdown.Item
                      href={`/theme/${selectedTheme}`}
                      id={theme.id} key={theme.id} onClick={searchTheme}
                    >
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
              onChange={searchSet}
              value={searchTerm}
            />
            <Link to="/search" state={{from: searchTerm}}>
              <Button variant="outline-secondary">Search</Button>
            </Link>
          </Form>
          <Nav>
          <Nav.Link href="/account" style={{fontSize: '2rem', padding: '0 0.5rem'}}>&#128159;</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br></br>
    <Routes>
      <Route path="/" element={ <Home allThemes={allThemes} searchTheme={searchTheme}/> } />
      <Route path="/theme/:id" element={ <Theme /> } />
      <Route path="/set/:id" element={ <SetDetails /> } />
      <Route path="/account" element={<Account />} />
      <Route path="/search" element={<Search />} />
    </Routes>

    </>
  );
}

export default App;
