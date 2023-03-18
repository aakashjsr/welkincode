import Particles from "../../components/Particles";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bg from "../../assets/images/freelance-web-development.png";
import Image from "react-bootstrap/Image";
import ContactModal from "../ContactModal";
import { useState } from "react";

export default function HeroBanner() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section id="home" className="mt-5 pt-5 bg-primary">
      <ContactModal show={showModal} setShow={setShowModal} />
      <Particles />
      <Row className="p-3 p-sm-5 mx-0 mx-sm-5 align-items-center">
        <Col xs="12" md="12" lg="7">
          <h1 className="text-light section-title">
            Fullstack Development, that's{" "}
            <span className="text-warning">Fast</span>,{" "}
            <span className="text-secondary">Precise</span> and{" "}
            <span className="text-success">Reliable!</span>
          </h1>
          <h2 className="text-light mt-5 fs-5 lh-base">
            Web Development is more than just making things look pretty. It’s
            about telling a story through the visuals that get your ideas across
            to your customers. <br />
            <br />
            I'm a full stack developer and specialise in building web
            applications using{" "}
            <span className="fw-bold text-white">Django</span> and{" "}
            <span className="fw-bold text-white">React</span>. I'll help you
            turn ideas into reality. <br />
            <br />
            <span className="text-white">
              Let’s build something amazing together!
            </span>
          </h2>
          <div className="mt-5">
            <Button
              variant="secondary"
              className="text-white p-4 rounded-pill"
              onClick={(e) => setShowModal(true)}
            >
              Build your web app today!
            </Button>
          </div>
        </Col>
        <Col xs="12" md="12" lg="5">
          <Image src={bg} fluid alt="freelance django and react development" />
        </Col>
      </Row>
    </section>
  );
}
