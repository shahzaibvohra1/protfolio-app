import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";

function Layout() {
  return (
    <>
      <nav>
        <div>
          <img src={Logo} alt="react logo" height={50} width={50}></img>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Me</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Me</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Layout;
