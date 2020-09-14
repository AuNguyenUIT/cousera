import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import { MenuComponent } from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";

function App() {
  const [dishes] = useState(DISHES);
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Pisces</NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent dishes={dishes} />
    </div>
  );
}

export default App;
