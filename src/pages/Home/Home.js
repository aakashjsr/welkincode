import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";
import styles from "../../scss/pages/home.module.scss";
import AboutSection from "./AboutSection";
import HeroBanner from "./HeroBanner";
import PortfolioSection from "./PortfolioSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>WelkinCode - Freelance Web development</title>
        <meta
          name="description"
          content="Launch your web application today!. We develop scalable web applications using django, python, react, javascript, docker and aws"
        />
      </Helmet>

      <div className={styles.homePage}>
        <HeroBanner />
        <AboutSection />
        <PortfolioSection />
      </div>
    </>
  );
}
