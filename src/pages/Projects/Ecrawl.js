import { Helmet } from "react-helmet";

import TechSkill from "../../components/TechSkill";

import eCrawlImg1 from "../../assets/images/portfolio/ecrawl/1.png";
import eCrawlImg2 from "../../assets/images/portfolio/ecrawl/2.png";
import eCrawlImg3 from "../../assets/images/portfolio/ecrawl/3.png";
import eCrawlImg4 from "../../assets/images/portfolio/ecrawl/4.png";
import eCrawlImg5 from "../../assets/images/portfolio/ecrawl/5.png";

import Slider from "react-slick";
import styles from "../../scss/pages/project.module.scss";

export default function Ecrawl() {
  const images = [eCrawlImg1, eCrawlImg2, eCrawlImg3, eCrawlImg4, eCrawlImg5];

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
        <title>WelkinCode - E-crawl</title>
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
          <h1>E-crawl</h1>
          <p>
            The client is in a drop-shipping business where he was selling 40k+
            products. The problem he was running into was that quite often he
            was receiving order for products that were actually out of stock in
            his manufacture’s website.
            <br />
            <br />
            The challenge was to identify such out of stock items and take them
            out from his website on a daily basis to improve customer
            experience.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.desc}>
            <h3>Highlights</h3>
            <ul>
              <li>Distributed system based crawler</li>
              <li>
                Ability to crawl and identify status of 40k+ products in under
                20 mins
              </li>
              <li>
                Option to export detailed report contains stats of products
              </li>
              <li>
                Auto retry mechanism for failed crawl attempts and ability to
                resume from the point of failure
              </li>
              <li>Low inventory alerts</li>
              <li>
                Optimised architecture to ensure minimal cost of operations
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
