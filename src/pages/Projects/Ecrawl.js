import { useEffect } from "react";

import eCrawlImg1 from "../../assets/images/portfolio/ecrawl/1.webp";
import eCrawlImg2 from "../../assets/images/portfolio/ecrawl/2.webp";
import eCrawlImg3 from "../../assets/images/portfolio/ecrawl/3.webp";
import eCrawlImg4 from "../../assets/images/portfolio/ecrawl/4.webp";
import eCrawlImg5 from "../../assets/images/portfolio/ecrawl/5.webp";

import ProjectTemplate from "./ProjectTemplate";

export default function Ecrawl() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [eCrawlImg1, eCrawlImg2, eCrawlImg3, eCrawlImg4, eCrawlImg5];

  const highlights = [
    "Distributed system based crawler",
    "Ability to crawl and identify status of 40k+ products in under 20 mins",
    "Option to export detailed report contains stats of products",
    "Auto retry mechanism for failed crawl attempts and ability to resume from the point of failure",
    "Low inventory alerts",
    "Optimised architecture to ensure minimal cost of operations",
  ];

  const skills = ["django", "react", "postgres", "docker", "aws"];

  const metaContent =
    "I'm a freelance web developer. I develop full stack applications using django, python, react, javascript, docker and aws";

  const pageTitle = "E-crawl";

  const pageContent = (
    <p>
      The client is in a drop-shipping business where he was selling 40k+
      products. The problem he was running into was that quite often he was
      receiving order for products that were actually out of stock in his
      manufacture’s website.
      <br />
      <br />
      The challenge was to identify such out of stock items and take them out
      from his website on a daily basis to improve customer experience.
    </p>
  );

  return (
    <ProjectTemplate
      {...{ images, highlights, skills, metaContent, pageTitle, pageContent }}
    />
  );
}
