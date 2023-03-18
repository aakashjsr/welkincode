import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ContactModal from "../pages/ContactModal";
import { useState } from "react";
import styles from "../scss/components/header.module.scss";

export default function Header() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  return (
    <Navbar expand="sm" className="bg-primary" fixed="top" variant="dark">
      <Container fluid>
        <ContactModal show={showModal} setShow={setShowModal} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/#home");
          }}
          className="text-warning fs-1"
        >
          WelkinCode
        </Navbar.Brand>

        <Button
          variant="secondary"
          className={`text-white rounded-pill ${styles.headerContactBtn} d-sm-none d-inline-block`}
          onClick={(e) => setShowModal(true)}
        >
          Contact me
        </Button>
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
          </Nav>
        </Navbar.Collapse>
        <Button
          variant="secondary"
          className={`text-white rounded-pill ${styles.headerContactBtn} d-sm-inline-block d-none`}
          onClick={(e) => setShowModal(true)}
        >
          Contact me
        </Button>
      </Container>
    </Navbar>
  );
}
