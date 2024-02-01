import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary py-2"
      style={{ backgroundColor: "#ab131b" }}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#pizza" style={{ color: "white" }}>
            PIZZA
          </Nav.Link>
          <Nav.Link href="#pasta" style={{ color: "white" }}>
            PASTA
          </Nav.Link>
          <Nav.Link href="#sides" style={{ color: "white" }}>
            SIDES
          </Nav.Link>
          <Nav.Link href="#drinks" style={{ color: "white" }}>
            DRINKS
          </Nav.Link>
          <Nav.Link href="#promos" style={{ color: "white" }}>
            PROMOS
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
