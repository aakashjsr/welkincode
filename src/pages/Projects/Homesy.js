import { Helmet } from "react-helmet";
import { useEffect } from "react";

import TechSkill from "../../components/TechSkill";

import homesyImg1 from "../../assets/images/portfolio/homesy/1.png";
import homesyImg2 from "../../assets/images/portfolio/homesy/2.png";
import homesyImg3 from "../../assets/images/portfolio/homesy/3.png";
import homesyImg4 from "../../assets/images/portfolio/homesy/4.png";
import homesyImg5 from "../../assets/images/portfolio/homesy/5.png";
import homesyImg6 from "../../assets/images/portfolio/homesy/6.png";
import homesyImg7 from "../../assets/images/portfolio/homesy/7.png";
import homesyImg8 from "../../assets/images/portfolio/homesy/8.png";
import homesyImg9 from "../../assets/images/portfolio/homesy/9.png";

import Slider from "react-slick";
import styles from "../../scss/pages/project.module.scss";

export default function Homesy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    homesyImg1,
    homesyImg2,
    homesyImg3,
    homesyImg4,
    homesyImg5,
    homesyImg6,
    homesyImg7,
    homesyImg8,
    homesyImg9,
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
        <title>WelkinCode - Homesy</title>
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
          <h1>Homesy</h1>
          <p>
            Homesy is a platform for the German real estate marketplace that
            allows users to list properties (for sale/rent) to multiple
            marketplaces by just registering the property details on the Homesy
            platform.
            <br />
            <br />
            The platform takes care of pushing the property details to multiple
            real estate platforms and also streamlines the queries received on
            multiple real estate platforms to Homesy’s mailbox.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.desc}>
            <h3>Highlights</h3>
            <ul>
              <li>Registration and login with email validation</li>
              <li>API integrations with real estate platforms</li>
              <li>
                Web scrapping to extract messages received on different real
                estate platforms
              </li>
              <li>
                Mailbox with features like read/un-read messages, ability to
                categories messages and assign labels
              </li>
              <li>Webhook processing</li>
              <li>Quick property look ups using performant REST APIs</li>
              <li>Extra property related services photography, cleaning etc</li>
              <li>CSV / Excel exports</li>
              <li>Invoice generation</li>
              <li>Localisation support for English and German</li>
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
