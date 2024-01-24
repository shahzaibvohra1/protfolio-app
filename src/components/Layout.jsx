import React from "react";
import Logo from "../assets/Logo.jpg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Layout() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} height={50} width={50} />
        </Navbar.Brand>
        <Nav className="me-auto" activeKey="/home">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/Contact">Contact Me</Nav.Link>
          <Nav.Link href="/Services">Services</Nav.Link>
          <Nav.Link href="/Projects">Projects</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Layout;
