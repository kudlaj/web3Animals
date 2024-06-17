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
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/play">Play</Nav.Link>
            <Nav.Link href="#blog">My Fighters</Nav.Link>
            <Nav.Link href="#project">How to Play</Nav.Link>
    
          </Nav>
        </Navbar.Collapse>
      </Navbar>

  );
};

export default Menu;
