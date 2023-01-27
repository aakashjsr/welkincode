import { Helmet } from "react-helmet";

import TechSkill from "../../components/TechSkill";

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

import Slider from "react-slick";
import styles from "../../scss/pages/project.module.scss";
import { useEffect } from "react";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Helmet>
        <title>WelkinCode - Interest Miner</title>
        <meta
          name="description"
          content="I'm a freelance web developer. I develop full stack applications using django, python, react, javascript, docker and aws"
        />
      </Helmet>

      <div className={styles.projectPage}>
        <div className={styles.carousel}>
          <Slider {...settings}>
            {images.map((im, index) => (
              <img key={index} src={im} />
            ))}
          </Slider>
        </div>

        <div className={styles.about}>
          <h1>Interest Miner</h1>
          <p>
            It's a platform that pulls data from twitter and research papers for
            an academic scholar and uses ML to analyse the user’s interest and
            displays the correlation between interests and topics using a
            variety of charts.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.desc}>
            <h3>Highlights</h3>
            <ul>
              <li>
                API integration with twitter to pull tweets data for the past 6
                months
              </li>
              <li>API integration with scholar to pull research papers</li>
              <li>Keyword analyser to segment interest based on topics</li>
              <li>
                Data models to capture short term and long term interest trends
                of users
              </li>
              <li>Metrics to compare 2 users’ interests</li>
              <li>8+ charts to illustrate visualise extracted data</li>
            </ul>
          </div>
          <div className={styles.techstack}>
            <h3>Techstack</h3>
            <div className={styles.skill}>
              <TechSkill circleImage textColor="white" techName="django" />
              <TechSkill circleImage textColor="white" techName="react" />
              <TechSkill circleImage textColor="white" techName="postgres" />
              <TechSkill circleImage textColor="white" techName="docker" />
              <TechSkill circleImage textColor="white" techName="aws" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
