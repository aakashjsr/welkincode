import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";
import RocketImg from "../assets/images/rocket.png";

export default function ContactModal({ show, setShow }) {
  const [state, handleSubmit] = useForm("xnqyzoln");
  return (
    <Modal show={show} onHide={(e) => setShow(false)}>
      <Modal.Header closeButton className="bg-warning">
        <Modal.Title className="text-primary">Get in touch</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {state.succeeded ? (
          <Row>
            <Image fluid src={RocketImg} />
            <h2 className="text-center">It all starts with a message!</h2>
            <p className="mt-4 text-center">
              I've received your message and will reach out to you soon.
            </p>
          </Row>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                name="phone"
                type="text"
                placeholder="Enter phone"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                name="message"
                required
                as="textarea"
                placeholder="Leave your message here"
                style={{ height: "100px" }}
              />
            </Form.Group>

            <Form.Group className="text-end">
              <Button
                variant="primary"
                type="submit"
                disabled={state.submitting}
                className="rounded-pill"
              >
                Send message
              </Button>
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
}
