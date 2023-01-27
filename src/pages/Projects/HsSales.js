import { Helmet } from "react-helmet";

import TechSkill from "../../components/TechSkill";

import hsSales1 from "../../assets/images/portfolio/hs_sales/1.png";
import hsSales2 from "../../assets/images/portfolio/hs_sales/2.png";
import hsSales3 from "../../assets/images/portfolio/hs_sales/3.png";
import hsSales4 from "../../assets/images/portfolio/hs_sales/4.png";
import hsSales5 from "../../assets/images/portfolio/hs_sales/5.png";
import hsSales6 from "../../assets/images/portfolio/hs_sales/6.png";
import hsSales7 from "../../assets/images/portfolio/hs_sales/7.png";
import hsSales8 from "../../assets/images/portfolio/hs_sales/8.png";
import hsSales9 from "../../assets/images/portfolio/hs_sales/9.png";
import hsSales10 from "../../assets/images/portfolio/hs_sales/10.png";
import hsSales11 from "../../assets/images/portfolio/hs_sales/11.png";

import Slider from "react-slick";
import styles from "../../scss/pages/project.module.scss";

export default function HsSales() {
  const metaTitle = "Hs Sales";
  const images = [
    hsSales1,
    hsSales2,
    hsSales3,
    hsSales4,
    hsSales5,
    hsSales6,
    hsSales7,
    hsSales8,
    hsSales9,
    hsSales10,
    hsSales11,
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
        <title>WelkinCode - {metaTitle}</title>
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
          <h1>HS Sales</h1>
          <p>
            HS Sales GmbH (alias Toredo Trading), based in Munich, is a
            e-commerce company specializing in consumer electronic products such
            as smartphones, tablets and smart home products. The HS web
            application is an inventory management platform that enables the
            admins to list and sell products on multiple platforms like eBay,
            Amazon, Rakuten etc.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.desc}>
            <h3>Highlights</h3>
            <ul>
              <li>3rd part API integrations to link to various marketplaces</li>
              <li>
                Templated categories to auto generate product description based
                on certain parameters
              </li>
              <li>Ability to create vendors, products, categories.</li>
              <li>
                Import batches containing items and track details on a serial
                number level
              </li>
              <li>
                Import sales data from third party integrations to track
                performance of products
              </li>
              <li>
                Option to manually checkout products sold at retail outlets
              </li>
              <li>Auto generate serial number for a variety of products</li>
              <li>Option to import a bunch of products via CSV</li>
              <li>Export reports related to a batch of products</li>
              <li>
                Generate PDF containing barcodes for products based on their
                serial numbers
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
