import React from 'react';
import logos from '../images/logo.svg'
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';

export const Header = () => {
  return (
    <Navbar className="navstyle sticky-top" expand="lg">
      <Navbar.Brand className="logo-style">
        <img src={logos} alt="logo" width="45px" height="45px" />
      </Navbar.Brand>
      <Nav className="ml-auto text-style">
        <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#link">PROJECTS</Nav.Link>
        <Nav.Link href="#link">BLOG</Nav.Link>
        <Nav.Link href="#link">MY DESIGNS</Nav.Link>
        <Nav.Link href="#link">ABOUT ME</Nav.Link>
      </Nav>
    </Navbar >
  )
}
