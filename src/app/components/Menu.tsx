'use client'
import React from 'react';
import {  Navbar, Nav, Button} from 'react-bootstrap';
import styles from './Menu.module.css';

const Menu = () => {
  return (
      <Navbar fixed="top" data-bs-theme="light" variant="light" expand="lg" className={`my-2 mx-5 ${styles.customNavbar}`}>
        <Navbar.Brand href="#home" className="px-3 text-2xl font-bold">🐼</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#characters">Characters</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
            <Button variant="pink" className="font-bold ml-2">
              Report Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

  );
};

export default Menu;
