import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
import Nav from "react-bootstrap/Nav";

function Layout() {
  return (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item as="li">
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to="/About">About Me</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to="/Contact">Contact Me</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to="/Services">Services</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to="/Projects">Projects</Link>
      </Nav.Item>
    </Nav>
  );
}

export default Layout;
