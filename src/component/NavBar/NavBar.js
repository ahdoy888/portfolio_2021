import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  props = {
    history: []
  };
  return (
    <>
      <nav className="nav-item">
        <ul className="list-item">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
