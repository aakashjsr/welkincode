import interestMinerImg1 from "../../assets/images/portfolio/interest_miner/1.webp";
import interestMinerImg2 from "../../assets/images/portfolio/interest_miner/2.webp";
import interestMinerImg3 from "../../assets/images/portfolio/interest_miner/3.webp";
import interestMinerImg4 from "../../assets/images/portfolio/interest_miner/4.webp";
import interestMinerImg5 from "../../assets/images/portfolio/interest_miner/5.webp";
import interestMinerImg6 from "../../assets/images/portfolio/interest_miner/6.webp";
import interestMinerImg7 from "../../assets/images/portfolio/interest_miner/7.webp";
import interestMinerImg8 from "../../assets/images/portfolio/interest_miner/8.webp";
import interestMinerImg9 from "../../assets/images/portfolio/interest_miner/9.webp";
import interestMinerImg10 from "../../assets/images/portfolio/interest_miner/10.webp";
import interestMinerImg11 from "../../assets/images/portfolio/interest_miner/11.webp";
import interestMinerImg12 from "../../assets/images/portfolio/interest_miner/12.webp";
import interestMinerImg13 from "../../assets/images/portfolio/interest_miner/13.webp";
import interestMinerImg14 from "../../assets/images/portfolio/interest_miner/14.webp";
import interestMinerImg15 from "../../assets/images/portfolio/interest_miner/15.webp";
import interestMinerImg16 from "../../assets/images/portfolio/interest_miner/16.webp";
import interestMinerImg17 from "../../assets/images/portfolio/interest_miner/17.webp";

import { useEffect } from "react";

import ProjectTemplate from "./ProjectTemplate";

export default function InterestMiner() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    interestMinerImg1,
    interestMinerImg2,
    interestMinerImg3,
    interestMinerImg4,
    interestMinerImg5,
    interestMinerImg6,
    interestMinerImg7,
    interestMinerImg8,
    interestMinerImg9,
    interestMinerImg10,
    interestMinerImg11,
    interestMinerImg12,
    interestMinerImg13,
    interestMinerImg14,
    interestMinerImg15,
    interestMinerImg16,
    interestMinerImg17,
  ];

  const highlights = [
    "API integration with twitter to pull tweets data for the past 6 months",
    "API integration with scholar to pull research papers",
    "Keyword analyser to segment interest based on topics",
    "Data models to capture short term and long term interest trends of users",
    "Metrics to compare 2 users’ interests",
    "8+ charts to illustrate visualise extracted data",
  ];

  const skills = ["django", "react", "postgres", "docker", "aws"];

  const metaContent =
    "I'm a freelance web developer. I develop full stack applications using django, python, react, javascript, docker and aws";

  const pageTitle = "Interest Miner";

  const pageContent = (
    <p>
      It's a platform that pulls data from twitter and research papers for an
      academic scholar and uses ML to analyse the user’s interest and displays
      the correlation between interests and topics using a variety of charts.
    </p>
  );

  return (
    <ProjectTemplate
      {...{ images, highlights, skills, metaContent, pageTitle, pageContent }}
    />
  );
}
