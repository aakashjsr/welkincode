import styles from "../../scss/pages/home.module.scss";
import hsSales from "../../assets/images/portfolio/hs_sales/1.webp";
import ecrawl from "../../assets/images/portfolio/ecrawl/4.webp";
import homesy from "../../assets/images/portfolio/homesy/1.webp";
import inibii from "../../assets/images/portfolio/inibii/1.webp";
import interestMiner from "../../assets/images/portfolio/interest_miner/1.webp";
import tgt from "../../assets/images/portfolio/tgt/1.webp";
import tripYork from "../../assets/images/portfolio/trip_york/1.webp";
import tass from "../../assets/images/portfolio/tass/3.webp";
import toredo from "../../assets/images/portfolio/toredo/1.webp";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useLayoutEffect, useState } from "react";

function PortolioItem({ image, text, url }) {
  const navigate = useNavigate();
  return (
    <Col
      xs="12"
      md="6"
      lg="4"
      className={`mb-5 text-center p-2 p-sm-4 ${styles.portfolioEntry}`}
      onClick={(e) => navigate(url)}
    >
      <Image fluid src={image} className="rounded-3 mb-4" />
      <h4>{text}</h4>
    </Col>
  );
}

function Testimonials() {
  const data = [
    {
      person: "Victor Mithouard",
      role: "CEO, The Good Trends",
      text: "We worked with Aakash for 1 year building the core of our application at The Good Trends. Aakash was extremely knowledgeable, a pleasure to work with and he delivered most of the code that got us started. Would highlight recommend him for any project.",
    },
    {
      person: "Michele Santo",
      role: "CEO, HS Sales Gmbh",
      text: "I have been working with Aakash for more than 3 years now in various IT projects (in the real estate and e-commerce sector) and I am absolutely amazed. Aakash's implementation speed, quality and communication are always on a very professional level. I especially appreciate the fact that he understands the applications and focuses the users. Aakash always has a solution for any problems that may arise. He has always kept to our agreements and completed all tasks on time and accurately. I appreciate our cooperation and look forward to further projects. Highly recommended! Greetings from Munich",
    },
    {
      person: "Fangzheng JI",
      role: "Researcher",
      text: "Aakash is very professional and knowledgeable in web development. He is really a hardworking programmer. I've been working with him for almost a half year. I really appreciated the time Aakash spent communicate with me about my questions and working with me to figure out the solution. I'm really impressed by his expertise to simplify complex problems as well as his friendly attitude. I learned a lot from him and would highly recommend him for mentoring and solving coding problems.",
    },
    {
      person: "Mike",
      role: "Founder, Sourcebox",
      text: "Aakash was tasked with the start-to-finish development work on a software project and demonstrated exceptional technical capabilities, professionalism, and the ability to deliver exactly what he promised. I highly recommend his technical services.",
    },
    {
      person: "Moshiul Arefin",
      role: "Founder, Innibi",
      text: "I worked closely with Aakash when he helped our team set up AWS infrastructure and develop Inibii's Auth server as well as Data Lake back-end. He has a strong understanding of business process in addition to his strong technical background. He was a team player and loves to wear multiple hats to get the job done. He was very innovative as well as dedicated to his project and team. I'll like to work with him again.",
    },
    {
      person: "David Iyoka",
      role: "Client, eCrawler",
      text: "I had a great experience. Aakash is very hard working, and went above and beyond to make sure the project was excellent.",
    },
    {
      person: "Ashok Verma",
      role: "CEO, ReportGarden Inc",
      text: "I’ve seen Aakash go above and beyond in researching and developing the product during the time we worked together. He’s a quick learner who’s happy to dive into new roles and challenges for the organization. He worked as a full stack engineer and a data engineer and was great with both. I would be happy to recommend him as he would be an asset to any organization.",
    },
    {
      person: "Ben Bright",
      role: "Client",
      text: "Aakash is fantastic to work with. He solved an issue I had been working on for 3 days in few minutes and explained everything to me in clear simple steps. I would highly recommend him for solving coding problems and mentoring.",
    },
    {
      person: "Frank",
      role: "Client",
      text: "Finally found someone here who is knowledgeable, reliable, and who has the ability to follow though and complete bigger projects. Thanks, Looking forward to additional projects in the near future.",
    },
    {
      person: "Advait",
      role: "Client",
      text: "The service offered to me was terrific. Aakash is a warm, flexible and approachable person, who is dedicated to his task. He was very patient with me and adjusting everytime I wanted even the smallest of changes. I'd recommend him for all related projects and would definitely come back to him anytime I'm doing a similar task. Thanks a lot, Aakash!",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [loadingNext, setLoadingNext] = useState(false);
  const [loadingPrev, setLoadingPrev] = useState(false);
  const [index, setIndex] = useState(0);

  useLayoutEffect(() => {
    if (loadingNext) {
      setIndex((index + 1) % data.length);
      setLoadingNext(false);
    }
  }, [loadingNext]);

  useLayoutEffect(() => {
    if (loadingPrev) {
      setIndex((index - 1 + data.length) % data.length);
      setLoadingPrev(false);
    }
  }, [loadingPrev]);

  const next = () => {
    setLoadingNext(true);
  };

  const prev = () => {
    setLoadingPrev(true);
  };

  const handleNavigation = (event) => {
    if (event.keyCode == 37) prev();
    if (event.keyCode == 39) next();
  };

  return (
    <div
      className={styles.testimonialSection}
      onKeyDown={handleNavigation}
      tabIndex="0"
    >
      <div className={styles.buttonContainer} onClick={prev}>
        {"➤"}
      </div>
      {!loadingPrev && !loadingNext && (
        <div className={styles.content}>
          <blockquote>❝</blockquote>
          <div>{data[index].text}</div>
          <div className="text-warning">{data[index].person}</div>
          <div className="text-warning">{data[index].role}</div>
        </div>
      )}
      <div className={styles.buttonContainer} onClick={next}>
        {"➤"}
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <Container fluid id="portfolio" className="p-2 p-md-4 bg-info text-dark">
      <h1 className="text-center">Portfolio</h1>

      <Row className="p-1">
        <PortolioItem url="/project/hs_sales" image={hsSales} text="HS Sales" />
        <PortolioItem url="/project/tgt" image={tgt} text="The Good Trends" />
        <PortolioItem
          url="/project/trip_york"
          image={tripYork}
          text="Trip York"
        />
        <PortolioItem url="/project/tass" image={tass} text="Tass" />
        <PortolioItem url="/project/toredo" image={toredo} text="Toredo" />
        <PortolioItem url="/project/homesy" image={homesy} text="Homesy" />
        <PortolioItem
          url="/project/ecrawl"
          image={ecrawl}
          text="Distributed crawler"
        />
        <PortolioItem
          url="/project/interest_miner"
          image={interestMiner}
          text="Interest miner"
        />
        <PortolioItem url="/project/inibii" image={inibii} text="Inibii" />
      </Row>

      <Row>
        <h1 className="text-center mt-5">Testimonials</h1>

        <Col>
          <Testimonials />
        </Col>
      </Row>
    </Container>
  );
}
