import interestMinerImg1 from "../../assets/images/portfolio/interest_miner/1.png";
import interestMinerImg2 from "../../assets/images/portfolio/interest_miner/2.png";
import interestMinerImg3 from "../../assets/images/portfolio/interest_miner/3.png";
import interestMinerImg4 from "../../assets/images/portfolio/interest_miner/4.png";
import interestMinerImg5 from "../../assets/images/portfolio/interest_miner/5.png";
import interestMinerImg6 from "../../assets/images/portfolio/interest_miner/6.png";
import interestMinerImg7 from "../../assets/images/portfolio/interest_miner/7.png";
import interestMinerImg8 from "../../assets/images/portfolio/interest_miner/8.png";
import interestMinerImg9 from "../../assets/images/portfolio/interest_miner/9.png";
import interestMinerImg10 from "../../assets/images/portfolio/interest_miner/10.png";
import interestMinerImg11 from "../../assets/images/portfolio/interest_miner/11.png";
import interestMinerImg12 from "../../assets/images/portfolio/interest_miner/12.png";
import interestMinerImg13 from "../../assets/images/portfolio/interest_miner/13.png";
import interestMinerImg14 from "../../assets/images/portfolio/interest_miner/14.png";
import interestMinerImg15 from "../../assets/images/portfolio/interest_miner/15.png";
import interestMinerImg16 from "../../assets/images/portfolio/interest_miner/16.png";
import interestMinerImg17 from "../../assets/images/portfolio/interest_miner/17.png";

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
