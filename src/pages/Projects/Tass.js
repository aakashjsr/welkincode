import ProjectTemplate from "./ProjectTemplate";

import tassImg1 from "../../assets/images/portfolio/tass/1.webp";
import tassImg2 from "../../assets/images/portfolio/tass/2.webp";
import tassImg3 from "../../assets/images/portfolio/tass/3.webp";
import tassImg4 from "../../assets/images/portfolio/tass/4.webp";
import { useEffect } from "react";

export default function TripYork() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [tassImg1, tassImg2, tassImg3, tassImg4];

  const highlights = [
    "Performant REST APIs with response time under 200 ms",
    "Integration with a variety of 3rd party platforms",
    "Email to ticket workflow",
    "In App communication work flow",
    "Modern and intutive UI",
  ];

  const skills = ["django", "postgres", "aws", "react", "docker", "sass"];

  const metaContent =
    "I'm a freelance web developer. I develop full stack applications using django, python, react, javascript, docker and aws";

  const pageTitle = "TAAS";

  const pageContent = (
    <p>
      TASS is a ticket management platform that integrates with a variety of
      platforms and provides an integrated view point to check and work upon
      customer tickets
    </p>
  );

  return (
    <ProjectTemplate
      {...{ images, highlights, skills, metaContent, pageTitle, pageContent }}
    />
  );
}
