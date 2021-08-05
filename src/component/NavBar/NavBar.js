import React from "react";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  const [open, setOpen] = React.useState(false);
  props = {
    history: []
  };
  return (
    <>
      <Navbar expand="sm" light>
        <NavbarToggler onClick={() => setOpen(!open)} />
        <Collapse isOpen={open} navbar>
          <Nav className="nav-item" navbar>
            <NavItem className="list-item">
              <NavLink className="list-item-text" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem className="list-item">
              <NavLink className="list-item-text" to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem className="list-item">
              <NavLink className="list-item-text" to="/projects">
                Projects
              </NavLink>
            </NavItem>
            <NavItem className="list-item">
              <NavLink className="list-item-text" to="/resume">
                Resume
              </NavLink>
            </NavItem>
            <NavItem className="list-item">
              <NavLink className="list-item-text" to="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
