import { Helmet } from "react-helmet";

import TechSkill from "../../components/TechSkill";

import Carousel from "react-bootstrap/Carousel";
import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useNavigate } from "react-router-dom";

export default function ProjectTemplate({
  images,
  highlights,
  skills,
  metaContent,
  pageTitle,
  pageContent,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  return (
    <Container fluid className="pt-5 p-md-5 mt-5 bg-info min-vh-100">
      <Helmet>
        <title>WelkinCode - {pageTitle}</title>
        <meta name="description" content={metaContent} />
      </Helmet>
      <Breadcrumb>
        <Breadcrumb.Item
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{pageTitle}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="w-75 text-center m-auto">
        <Carousel variant="dark" keyboard touch interval={3000}>
          {images.map((im, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={im} />
              {/* <Carousel.Caption>
                <p>App demo</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <Row className="mt-5">
        <h1>{pageTitle}</h1>
        {pageContent}
      </Row>

      <Row className="mt-5">
        <Col xs="12" md="8">
          <h3>HIGHLIGHTS</h3>
          <ul>
            {highlights.map((hl, index) => (
              <li key={index}>{hl}</li>
            ))}
          </ul>
        </Col>
        <Col xs="12" md="4">
          <h3>SKILLS</h3>
          <Row>
            {skills.map((s, index) => (
              <TechSkill key={index} circleImage techName={s} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
