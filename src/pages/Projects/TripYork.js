import ProjectTemplate from "./ProjectTemplate";

import tripYork1 from "../../assets/images/portfolio/trip_york/1.png";
import tripYork2 from "../../assets/images/portfolio/trip_york/2.png";
import tripYork3 from "../../assets/images/portfolio/trip_york/3.png";
import tripYork4 from "../../assets/images/portfolio/trip_york/4.png";
import tripYork5 from "../../assets/images/portfolio/trip_york/5.png";
import tripYork6 from "../../assets/images/portfolio/trip_york/6.png";

import { useEffect } from "react";

export default function TripYork() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    tripYork1,
    tripYork2,
    tripYork3,
    tripYork4,
    tripYork5,
    tripYork6,
  ];

  const highlights = [
    "Performant REST APIs with response time under 300 ms",
    "Accurate geolocation detection using user’s WiFi / mobile network",
    "Well maintained database using sharding and indexing to enable quick lookups",
  ];

  const skills = ["django", "postgres", "aws", "react", "docker", "sass"];

  const metaContent =
    "I'm a freelance web developer. I develop full stack applications using django, python, react, javascript, docker and aws";

  const pageTitle = "Trip York";

  const pageContent = (
    <p>
      It's a travel website that enables users to book flights, cabs, hotels
      etc. by comparing the prices across different websites
    </p>
  );

  return (
    <ProjectTemplate
      {...{ images, highlights, skills, metaContent, pageTitle, pageContent }}
    />
  );
}
