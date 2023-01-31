import { Helmet } from "react-helmet";

import TechSkill from "../../components/TechSkill";

import tassImg1 from "../../assets/images/portfolio/tass/1.png";
import tassImg2 from "../../assets/images/portfolio/tass/2.png";
import tassImg3 from "../../assets/images/portfolio/tass/3.png";
import tassImg4 from "../../assets/images/portfolio/tass/4.png";

import Slider from "react-slick";
import styles from "../../scss/pages/project.module.scss";
import { useEffect } from "react";

export default function TripYork() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    tassImg1,
    tassImg2,
    tassImg3,
    tassImg4,
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
        <title>WelkinCode - TASS</title>
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
          <h1>TASS</h1>
          <p>
            TASS is a ticket management platform that integrates with a variety of platforms and provides an integrated view point to check and work upon customer tickets
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.desc}>
            <h3>Highlights</h3>
            <ul>
              <li>Performant REST APIs with response time under 200 ms</li>
              <li>
                Integration with a variety of 3rd party platforms
              </li>
              <li>
                Email to ticket workflow
              </li>
              <li>In App communication work flow</li>
              <li>Modern and intutive UI</li>
            </ul>
          </div>
          <div className={styles.techstack}>
            <h3>Techstack</h3>
            <div className={styles.skill}>
              <TechSkill circleImage textColor="white" techName="django" />
              <TechSkill circleImage textColor="white" techName="react" />
              <TechSkill circleImage textColor="white" techName="sass" />
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
