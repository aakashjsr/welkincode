import inibiiImg1 from "../../assets/images/portfolio/inibii/1.png";
import inibiiImg2 from "../../assets/images/portfolio/inibii/2.png";
import inibiiImg3 from "../../assets/images/portfolio/inibii/3.png";

import ProjectTemplate from "./ProjectTemplate";
import { useEffect } from "react";

export default function Inibii() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [inibiiImg1, inibiiImg2, inibiiImg3];

  const highlights = [
    "Integration with electric power boards to pull room level data for electricity consumption",
    "Integration with gas providers to pull house level data for gas consumption",
    "Integration with water providers to pull water consumption data",
    "Data lake facilitating giga bytes of data flowing in every month",
    "SFTP integration with data providers to pull consumer data in form of CSV and custom parsing engines to parse CSV data",
    "Serverless functions to handle events using AWS Lambda",
  ];

  const skills = ["django", "postgres", "aws"];

  const metaContent =
    "I'm a freelance web developer. I develop full stack applications using django, python, react, javascript, docker and aws";

  const pageTitle = "Inibii";

  const pageContent = (
    <p>
      Inibii Technology is changing the way building owners and facility
      managers visualize, monitor and manage their energy usage. By utilizing
      Inibii’s easy-to-use energy management platform, customers take control of
      their consumption data ultimately to make an impact on the planet.
      <br />
      <br />
      Inibii’s Cloud-Based Energy Management Platform is a NO COST,
      comprehensive tool combining electricity, water, and gas data. After an
      initial set-up, building owners develop visibility of their energy
      consumption, reduce operating expenses, monitor trends, and achieve
      sustainability goals.
    </p>
  );

  return (
    <ProjectTemplate
      {...{ images, highlights, skills, metaContent, pageTitle, pageContent }}
    />
  );
}
