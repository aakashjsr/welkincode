import ProjectTemplate from "./ProjectTemplate";

import toredoImg1 from "../../assets/images/portfolio/toredo/1.webp";
import toredoImg2 from "../../assets/images/portfolio/toredo/2.webp";
import toredoImg3 from "../../assets/images/portfolio/toredo/3.webp";
import toredoImg4 from "../../assets/images/portfolio/toredo/4.webp";
import toredoImg5 from "../../assets/images/portfolio/toredo/5.webp";
import toredoImg6 from "../../assets/images/portfolio/toredo/6.webp";

import { useEffect } from "react";

export default function Toredo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    toredoImg1,
    toredoImg2,
    toredoImg3,
    toredoImg4,
    toredoImg5,
    toredoImg6,
  ];

  const highlights = [
    "Performant REST APIs with response time under 300 ms",
    "Integration with a variety of 3rd party platforms",
    "Modern and intutive UI",
  ];

  const skills = ["django", "postgres", "aws", "react", "docker", "sass"];

  const metaContent =
    "I'm a freelance web developer. I develop full stack applications using django, python, react, javascript, docker and aws";

  const pageTitle = "Toredo";

  const pageContent = (
    <p>
      Toredo is a platform where users can sell their old smartphones based on
      their conditions and cash out using a simple online workflow.
    </p>
  );

  return (
    <ProjectTemplate
      {...{ images, highlights, skills, metaContent, pageTitle, pageContent }}
    />
  );
}
