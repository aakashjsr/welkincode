import styles from "../scss/components/header.module.scss";
import Logo from "../assets/images/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="sm" className="bg-primary" fixed="top" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/#home" className="text-warning fs-1">
          WelkinCode
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end align-items-center"
        >
          <Nav className="align-items-center">
            <Nav.Link href="/#about" className="text-white">
              About
            </Nav.Link>
            <Nav.Link href="/#portfolio" className="text-white">
              Portfolio
            </Nav.Link>
            <Nav.Link href="/#about" className="text-info">
              <Button variant="secondary" className="text-white rounded-pill">
                Contact
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
