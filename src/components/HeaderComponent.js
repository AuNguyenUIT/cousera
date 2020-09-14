import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default function Header() {
  return (
    <>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Pisces</NavbarBrand>
        </div>
      </Navbar>
    </>
  );
}
