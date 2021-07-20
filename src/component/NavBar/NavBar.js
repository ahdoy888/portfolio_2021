import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  props = {
    history: []
  };
  return (
    <>
      <Nav className="nav-item">
        <NavItem className="list-item">
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/resume">Resume</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </>
  );
};

export default NavBar;
