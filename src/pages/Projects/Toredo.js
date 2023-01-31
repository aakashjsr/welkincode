import { Helmet } from "react-helmet";

import TechSkill from "../../components/TechSkill";

import toredoImg1 from "../../assets/images/portfolio/toredo/1.png";
import toredoImg2 from "../../assets/images/portfolio/toredo/2.png";
import toredoImg3 from "../../assets/images/portfolio/toredo/3.png";
import toredoImg4 from "../../assets/images/portfolio/toredo/4.png";
import toredoImg5 from "../../assets/images/portfolio/toredo/5.png";
import toredoImg6 from "../../assets/images/portfolio/toredo/6.png";

import Slider from "react-slick";
import styles from "../../scss/pages/project.module.scss";
import { useEffect } from "react";

export default function Toredo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    toredoImg1,
    toredoImg2,
    toredoImg3,
    toredoImg4,
    toredoImg5,
    toredoImg6,
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
        <title>WelkinCode - Toredo</title>
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
          <h1>Toredo</h1>
          <p>
            Toredo is a platform where users can sell their old smartphones based on their conditions and cash out using a simple online workflow.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.desc}>
            <h3>Highlights</h3>
            <ul>
              <li>Performant REST APIs with response time under 300 ms</li>
              <li>
                Integration with a variety of 3rd party platforms
              </li>
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
