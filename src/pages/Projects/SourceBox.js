import { Helmet } from "react-helmet";

import TechSkill from "../../components/TechSkill";

import sourceBoxImg1 from "../../assets/images/portfolio/source_box/1.png";
import sourceBoxImg2 from "../../assets/images/portfolio/source_box/2.png";
import sourceBoxImg3 from "../../assets/images/portfolio/source_box/3.png";
import sourceBoxImg4 from "../../assets/images/portfolio/source_box/4.png";
import sourceBoxImg5 from "../../assets/images/portfolio/source_box/5.png";
import sourceBoxImg6 from "../../assets/images/portfolio/source_box/6.png";
import sourceBoxImg7 from "../../assets/images/portfolio/source_box/7.png";
import sourceBoxImg8 from "../../assets/images/portfolio/source_box/8.png";
import sourceBoxImg9 from "../../assets/images/portfolio/source_box/9.png";

import Slider from "react-slick";
import styles from "../../scss/pages/project.module.scss";

export default function SourceBox() {
  const images = [
    sourceBoxImg1,
    sourceBoxImg2,
    sourceBoxImg3,
    sourceBoxImg4,
    sourceBoxImg5,
    sourceBoxImg6,
    sourceBoxImg7,
    sourceBoxImg8,
    sourceBoxImg9,
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
        <title>WelkinCode - Source Box</title>
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
          <h1>Source Box</h1>
          <p>
            Sourcebox is a platform that acts as an escrow for source code and
            enables a company to manage their codebase and provide access to the
            code to their stake holders.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.desc}>
            <h3>Highlights</h3>
            <ul>
              <li>Login and Register functionality</li>
              <li>
                Multi factor authentication to provide an extra layer of
                security
              </li>
              <li>
                Oauth integration with Github to facilitate automatic code
                backups in periodic intervals
              </li>
              <li>
                File upload to hand manual upload of large codebases in zip
                format
              </li>
              <li>Code and file analysis for the uploaded repositories</li>
              <li>Secure data storage in AWS s3 within a private VPC</li>
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
