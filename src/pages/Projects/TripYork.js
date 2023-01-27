import { Helmet } from "react-helmet";

import TechSkill from "../../components/TechSkill";

import tripYork1 from "../../assets/images/portfolio/trip_york/1.png";
import tripYork2 from "../../assets/images/portfolio/trip_york/2.png";
import tripYork3 from "../../assets/images/portfolio/trip_york/3.png";
import tripYork4 from "../../assets/images/portfolio/trip_york/4.png";
import tripYork5 from "../../assets/images/portfolio/trip_york/5.png";
import tripYork6 from "../../assets/images/portfolio/trip_york/6.png";

import Slider from "react-slick";
import styles from "../../scss/pages/project.module.scss";

export default function TripYork() {
  const images = [
    tripYork1,
    tripYork2,
    tripYork3,
    tripYork4,
    tripYork5,
    tripYork6,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Helmet>
        <title>WelkinCode - Trip York</title>
        <meta
          name="description"
          content="I'm a freelance web developer. I develop full stack applications using django, python, react, javascript, docker and aws"
        />
      </Helmet>

      <div className={styles.projectPage}>
        <div className={styles.carousel}>
          <Slider {...settings}>
            {images.map((im) => (
              <img src={im} />
            ))}
          </Slider>
        </div>

        <div className={styles.about}>
          <h1>Trip York</h1>
          <p>
            It's a travel website that enables users to book flights, cabs,
            hotels etc. by comparing the prices across different websites
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.desc}>
            <h3>Highlights</h3>
            <ul>
              <li>Performant REST APIs with response time under 300 ms</li>
              <li>
                Accurate geolocation detection using user’s WiFi / mobile
                network
              </li>
              <li>
                Well maintained database using sharding and indexing to enable
                quick lookups
              </li>
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
