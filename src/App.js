import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import { MenuComponent } from "./components/MenuComponent";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Pisces</NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent />
    </div>
  );
}

export default App;
