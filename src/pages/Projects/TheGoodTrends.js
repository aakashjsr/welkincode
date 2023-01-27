import { Helmet } from "react-helmet";

import TechSkill from "../../components/TechSkill";

import tgtImg1 from "../../assets/images/portfolio/tgt/1.png";
import tgtImg2 from "../../assets/images/portfolio/tgt/2.png";
import tgtImg3 from "../../assets/images/portfolio/tgt/3.png";
import tgtImg4 from "../../assets/images/portfolio/tgt/4.png";
import tgtImg5 from "../../assets/images/portfolio/tgt/5.png";
import tgtImg6 from "../../assets/images/portfolio/tgt/6.png";
import tgtImg7 from "../../assets/images/portfolio/tgt/7.png";

import Slider from "react-slick";
import styles from "../../scss/pages/project.module.scss";

export default function TheGoodTrends() {
  const images = [
    tgtImg1,
    tgtImg2,
    tgtImg3,
    tgtImg4,
    tgtImg5,
    tgtImg6,
    tgtImg7,
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
        <title>WelkinCode - The Good Trends</title>
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
          <h1>The Good Trends</h1>
          <p>
            The Good Trends is a marketplace that connects buyers to sellers and
            local store owners that sell healthy food. Their purpose is to
            increase access and affordability to the US consumers to healthier,
            more local food products by reinventing food wholesale and making it
            more transparent and streamlined.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.desc}>
            <h3>Highlights</h3>
            <ul>
              <li>Portals for store owners to register brands and products</li>
              <li>
                Ability to link POS systems with the platform to capture sales
                and inventory stats
              </li>
              <li>Products and Brand Analytics for store owners</li>
              <li>Monthly Invoice and statement generation for store owners</li>
              <li>Low inventory alerts</li>
              <li>
                Real time discounts and offers computation based on items added
                to a consumer’s cart with the ability to handle 1000+ events per
                second
              </li>
              <li>CSV import for bulk processing</li>
              <li>CSV / Excel exports</li>
              <li>APM to track app errors and notify admins</li>
              <li>Auto scaled web servers to handle huge traffic</li>
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
