import ProjectTemplate from "./ProjectTemplate";

import sourceBoxImg1 from "../../assets/images/portfolio/source_box/1.png";
import sourceBoxImg2 from "../../assets/images/portfolio/source_box/2.png";
import sourceBoxImg3 from "../../assets/images/portfolio/source_box/3.png";
import sourceBoxImg4 from "../../assets/images/portfolio/source_box/4.png";
import sourceBoxImg5 from "../../assets/images/portfolio/source_box/5.png";
import sourceBoxImg6 from "../../assets/images/portfolio/source_box/6.png";
import sourceBoxImg7 from "../../assets/images/portfolio/source_box/7.png";
import sourceBoxImg8 from "../../assets/images/portfolio/source_box/8.png";
import sourceBoxImg9 from "../../assets/images/portfolio/source_box/9.png";
import { useEffect } from "react";

export default function SourceBox() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    sourceBoxImg1,
    sourceBoxImg2,
    sourceBoxImg3,
    sourceBoxImg4,
    sourceBoxImg5,
    sourceBoxImg6,
    sourceBoxImg7,
    sourceBoxImg8,
    sourceBoxImg9,
  ];

  const highlights = [
    "Login and Register functionality",
    "Multi factor authentication to provide an extra layer of security",
    "Oauth integration with Github to facilitate automatic code backups in periodic intervals",
    "File upload to hand manual upload of large codebases in zip format",
    "Code and file analysis for the uploaded repositories",
    "Secure data storage in AWS s3 within a private VPC",
  ];

  const skills = ["django", "postgres", "aws", "react", "docker"];

  const metaContent =
    "I'm a freelance web developer. I develop full stack applications using django, python, react, javascript, docker and aws";

  const pageTitle = "Source Box";

  const pageContent = (
    <p>
      Sourcebox is a platform that acts as an escrow for source code and enables
      a company to manage their codebase and provide access to the code to their
      stake holders.
    </p>
  );

  return (
    <ProjectTemplate
      {...{ images, highlights, skills, metaContent, pageTitle, pageContent }}
    />
  );
}
