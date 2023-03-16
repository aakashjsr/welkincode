import ProjectTemplate from "./ProjectTemplate";

import tgtImg1 from "../../assets/images/portfolio/tgt/1.webp";
import tgtImg2 from "../../assets/images/portfolio/tgt/2.webp";
import tgtImg3 from "../../assets/images/portfolio/tgt/3.webp";
import tgtImg4 from "../../assets/images/portfolio/tgt/4.webp";
import tgtImg5 from "../../assets/images/portfolio/tgt/5.webp";
import tgtImg6 from "../../assets/images/portfolio/tgt/6.webp";
import tgtImg7 from "../../assets/images/portfolio/tgt/7.webp";

import { useEffect } from "react";

export default function TheGoodTrends() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    tgtImg1,
    tgtImg2,
    tgtImg3,
    tgtImg4,
    tgtImg5,
    tgtImg6,
    tgtImg7,
  ];

  const highlights = [
    "Portals for store owners to register brands and products",
    "Ability to link POS systems with the platform to capture sales and inventory stats",
    "Products and Brand Analytics for store owners",
    "Monthly Invoice and statement generation for store owners",
    "Low inventory alerts",
    "Real time discounts and offers computation based on items added to a consumer’s cart with the ability to handle 1000+ events per second",
    "CSV import for bulk processing",
    "CSV / Excel exports",
    "APM to track app errors and notify admins",
    "Auto scaled web servers to handle huge traffic",
  ];

  const skills = ["django", "postgres", "aws", "react", "docker", "sass"];

  const metaContent =
    "I'm a freelance web developer. I develop full stack applications using django, python, react, javascript, docker and aws";

  const pageTitle = "The Good Trends";

  const pageContent = (
    <p>
      The Good Trends is a marketplace that connects buyers to sellers and local
      store owners that sell healthy food. Their purpose is to increase access
      and affordability to the US consumers to healthier, more local food
      products by reinventing food wholesale and making it more transparent and
      streamlined.
    </p>
  );

  return (
    <ProjectTemplate
      {...{ images, highlights, skills, metaContent, pageTitle, pageContent }}
    />
  );
}
