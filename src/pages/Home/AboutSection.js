import styles from "../../scss/pages/home.module.scss";
import profileImg from "../../assets/images/aakash-kumar-das.jpeg";
import serviceNow from "../../assets/images/company/servicenow.png";
import toptal from "../../assets/images/company/toptal.png";
import codementor from "../../assets/images/company/codementor.jpeg";
import lji from "../../assets/images/company/lji.jpeg";
import jtg from "../../assets/images/company/jtg.jpeg";
import reportgarden from "../../assets/images/company/reportgarden.png";
import linkedin from "../../assets/images/company/linkedin.png";
import fiverr from "../../assets/images/company/fiverr.png";
import gmail from "../../assets/images/company/gmail.png";
import TechSkill from "../../components/TechSkill";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

function ExperienceRow({ companyName, role, tenure, icon }) {
  return (
    <div className={styles.experienceRow}>
      <div className={styles.companyIcon}>
        <img src={icon} height="50" width="50" />
      </div>
      <div className={styles.companyDetails}>
        <div>
          {companyName} ({tenure})
        </div>
        <div>{role}</div>
      </div>
    </div>
  );
}

function SkillItem({ logo, text }) {
  return (
    <div className={styles.skillIcon}>
      <img src={logo} height="50" width="50" />
      {text}
    </div>
  );
}

function SocialMediaItem({ icon, url }) {
  return (
    // <div className={styles.socialMediaItem}>
    <img src={icon} height="40" width="40" onClick={(e) => window.open(url)} />
    // </div>
  );
}

const socialIconData = [
  {
    alt: "Linkedin - Aakash Kumar Das",
    icon: linkedin,
    url: "https://www.linkedin.com/in/aakash94/",
  },
  {
    alt: "Gmail - Aakash Kumar Das",
    icon: gmail,
    url: "mailto: aakashjsr@gmail.com",
  },
  {
    alt: "Codementor - Aakash Kumar Das",
    icon: codementor,
    url: "https://www.codementor.io/@aakashkumardas",
  },
  {
    alt: "Toptal - Aakash Kumar Das",
    icon: toptal,
    url: "https://www.toptal.com/resume/aakash-kumar-das",
  },
  {
    alt: "Fiverr - Aakash Kumar Das",
    icon: fiverr,
    url: "https://www.fiverr.com/aakashjsr",
  },
];

const experienceData = [
  {
    companyName: "ServiceNow",
    role: "Senior Software Engineer",
    tenure: "2019 - Present",
    icon: serviceNow,
  },

  {
    companyName: "Toptal",
    role: "Full Stack Engineer",
    tenure: "2021 - Present",
    icon: toptal,
  },

  {
    companyName: "Codementor",
    role: "Full Stack Engineer",
    tenure: "2018 - Present",
    icon: codementor,
  },

  {
    companyName: "Loyalty Juggernaut Inc",
    role: "Senior Product Engineer",
    tenure: "2018 - 2019",
    icon: lji,
  },

  {
    companyName: "ReportGarden Inc ",
    role: "Full Stack Engineer",
    tenure: "2017 - 2018",
    icon: reportgarden,
  },

  {
    companyName: "Josh Technology Group ",
    role: "Software Engineer",
    tenure: "2015 - 2017",
    icon: jtg,
  },
];

export default function AboutSection() {
  return (
    <Container fluid className="p-2 p-md-4 bg-white" id="about">
      <Row className="mb-5">
        <h1 className="text-primary text-center">About</h1>
      </Row>

      <Row className="mt-5">
        <Col xs="12" md="5" className="text-center">
          {/* Profile image */}
          <Image
            src={profileImg}
            height="250rem"
            className="rounded-circle"
            alt="Aakash Kumar Das | Full stack developer"
          />

          {/* social links */}
          <Row className="px-2 px-md-5 mt-3">
            <Col>
              {socialIconData.map((item, index) => (
                <a href={item.url} key={index} className="mx-2">
                  <Image src={item.icon} height="40" alt={item.alt} />
                </a>
              ))}
            </Col>
          </Row>

          {/* Experience */}
          <Row className="mt-5">
            <Col xs="12">
              <h1>Experience</h1>
            </Col>

            {experienceData.map((item, index) => (
              <Row key={index} className="my-4 align-items-center">
                <Col xs="4" className="text-end">
                  <Image
                    src={item.icon}
                    height="50"
                    width="50"
                    alt={`Aakash worked at ${item.companyName}`}
                  />
                </Col>
                <Col xs="8" className="text-start">
                  <div>
                    <b>
                      {item.companyName} ({item.tenure})
                    </b>
                  </div>
                  <div>{item.role}</div>
                </Col>
              </Row>
            ))}
          </Row>
        </Col>

        <Col xs="12" md="7" className="p-5">
          {/* Bio section */}
          <div>
            <h5 style={{ fontFamily: "none" }} className="mb-3">
              HEY THERE!
            </h5>
            <h1 className="mb-5 text-primary">I'm Aakash</h1>
            <p className="fs-5">
              I'm a seasoned software engineer specializing in full stack
              development. I have 8 years of experience in architecting and
              developing products for startups and established companies across
              the globe. <br />
              <br />
              These include eCommerce, real estate, foodtech, energy efficiency,
              and healthcare solutions. I have a deep passion and enthusiasm for
              software development and enabling businesses to succeed and grow
              through technology.
            </p>
          </div>

          {/* skills section */}
          <div className="mt-5">
            <h3 className="">ACHIEVEMENTS</h3>
            <ul>
              <li>
                Single-handedly developed a marketplace platform that raised
                pre-seed funding of $100,000.
              </li>
              <li>
                Engineer at Toptal which hires the top 3% developer around the
                globe
              </li>
              <li>100% happy and satisfied clients around the globe</li>
            </ul>

            <h3 className="mt-5">SKILLS</h3>
            <Row>
              <TechSkill textColor="#000" techName="python" />
              <TechSkill textColor="#000" techName="django" />
              <TechSkill textColor="#000" techName="html" />
              <TechSkill textColor="#000" techName="css" />
              <TechSkill textColor="#000" techName="sass" />
              <TechSkill textColor="#000" techName="javascript" />
              <TechSkill textColor="#000" techName="react" />
              <TechSkill textColor="#000" techName="aws" />
              <TechSkill textColor="#000" techName="docker" />
              <TechSkill textColor="#000" techName="postgres" />
              <TechSkill textColor="#000" techName="mysql" />
              <TechSkill textColor="#000" techName="servicenow" />
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
