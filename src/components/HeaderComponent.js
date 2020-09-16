import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Collapse,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
} from "reactstrap";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const handleSubmit = (event) => {
    console.log(username, password, remember);
    event.preventDefault();
  };
  return (
    <Navbar dark expand="md">
      <Modal
        isOpen={isModalOpen}
        toggle={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        <ModalHeader
          toggle={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          Login
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={(event) => handleSubmit(event)}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="remember"
                  value={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                />
                Remember me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
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
            <NavItem>
              <Button
                outline
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                }}
              >
                <span className="fa fa-sign-in fa-lg"></span> Login
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}
