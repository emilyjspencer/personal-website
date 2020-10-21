
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './NavBar.css';


const NavBar = () => {
  return (
  
      <Navbar fixed="top" bg="light" variant="light"  className="nav">
        
        <Navbar.Brand href="">Emily Spencer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="about">Home</Nav.Link>
            <Nav.Link href="portfolio">Portfolio</Nav.Link>
            <Nav.Link href="cv">CV</Nav.Link>
            <Nav.Link href="interests">Interests</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
 
  )
}



export default NavBar;