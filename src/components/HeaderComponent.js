import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,

  Nav,
  Navbar,

  NavbarToggler,
  NavItem
} from "reactstrap";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <Navbar dark expand="md">
      <div className="container">
        <NavbarToggler
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
        />
        <Collapse isOpen={isNavOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" to="/home">
                <span className="fa fa-home fa-lg"></span> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                <span className="fa fa-info fa-lg"></span> About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/menu">
                <span className="fa fa-list fa-lg"></span> Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                <span className="fa fa-address-card fa-lg"></span> Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}
