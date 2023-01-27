import { Helmet } from "react-helmet";

import TechSkill from "../../components/TechSkill";

import inibiiImg1 from "../../assets/images/portfolio/inibii/1.png";
import inibiiImg2 from "../../assets/images/portfolio/inibii/2.png";
import inibiiImg3 from "../../assets/images/portfolio/inibii/3.png";

import Slider from "react-slick";
import styles from "../../scss/pages/project.module.scss";
import { useEffect } from "react";

export default function Inibii() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [inibiiImg1, inibiiImg2, inibiiImg3];

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
        <title>WelkinCode - Inibii</title>
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
          <h1>Inibii</h1>
          <p>
            Inibii Technology is changing the way building owners and facility
            managers visualize, monitor and manage their energy usage. By
            utilizing Inibii’s easy-to-use energy management platform, customers
            take control of their consumption data ultimately to make an impact
            on the planet.
            <br />
            <br />
            Inibii’s Cloud-Based Energy Management Platform is a NO COST,
            comprehensive tool combining electricity, water, and gas data. After
            an initial set-up, building owners develop visibility of their
            energy consumption, reduce operating expenses, monitor trends, and
            achieve sustainability goals.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.desc}>
            <h3>Highlights</h3>
            <ul>
              <li>
                Integration with electric power boards to pull room level data
                for electricity consumption
              </li>
              <li>
                Integration with gas providers to pull house level data for gas
                consumption
              </li>
              <li>
                Integration with water providers to pull water consumption data
              </li>
              <li>
                Data lake facilitating giga bytes of data flowing in every month
              </li>
              <li>
                SFTP integration with data providers to pull consumer data in
                form of CSV and custom parsing engines to parse CSV dat
              </li>
              <li>Serverless functions to handle events using AWS Lambda</li>
            </ul>
          </div>
          <div className={styles.techstack}>
            <h3>Techstack</h3>
            <div className={styles.skill}>
              <TechSkill circleImage textColor="white" techName="django" />
              <TechSkill circleImage textColor="white" techName="postgres" />
              <TechSkill circleImage textColor="white" techName="aws" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
