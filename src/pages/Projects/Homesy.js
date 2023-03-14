import { useEffect } from "react";

import ProjectTemplate from "./ProjectTemplate";

import homesyImg1 from "../../assets/images/portfolio/homesy/1.png";
import homesyImg2 from "../../assets/images/portfolio/homesy/2.png";
import homesyImg3 from "../../assets/images/portfolio/homesy/3.png";
import homesyImg4 from "../../assets/images/portfolio/homesy/4.png";
import homesyImg5 from "../../assets/images/portfolio/homesy/5.png";
import homesyImg6 from "../../assets/images/portfolio/homesy/6.png";
import homesyImg7 from "../../assets/images/portfolio/homesy/7.png";
import homesyImg8 from "../../assets/images/portfolio/homesy/8.png";
import homesyImg9 from "../../assets/images/portfolio/homesy/9.png";

export default function Homesy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    homesyImg1,
    homesyImg2,
    homesyImg3,
    homesyImg4,
    homesyImg5,
    homesyImg6,
    homesyImg7,
    homesyImg8,
    homesyImg9,
  ];

  const highlights = [
    "Registration and login with email validation",
    "API integrations with real estate platforms",
    "Web scrapping to extract messages received on different real estate platforms",
    "Mailbox with features like read/un-read messages, ability to categories messages and assign labels",
    "Webhook processing",
    "Quick property look ups using performant REST APIs",
    "Extra property related services photography, cleaning etc",
    "CSV / Excel exports",
    "Invoice generation",
    "Localisation support for English and German",
  ];

  const skills = ["django", "react", "postgres", "docker", "aws"];

  const metaContent =
    "I'm a freelance web developer. I develop full stack applications using django, python, react, javascript, docker and aws";

  const pageTitle = "Homesy";

  const pageContent = (
    <p>
      Homesy is a platform for the German real estate marketplace that allows
      users to list properties (for sale/rent) to multiple marketplaces by just
      registering the property details on the Homesy platform.
      <br />
      <br />
      The platform takes care of pushing the property details to multiple real
      estate platforms and also streamlines the queries received on multiple
      real estate platforms to Homesy’s mailbox.
    </p>
  );

  return (
    <ProjectTemplate
      {...{ images, highlights, skills, metaContent, pageTitle, pageContent }}
    />
  );
}
