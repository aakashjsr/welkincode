import { Helmet } from "react-helmet";
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
          content="I'm a freelance full stack developer who builds scalable web applications using django, python, react, javascript, docker and aws"
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
