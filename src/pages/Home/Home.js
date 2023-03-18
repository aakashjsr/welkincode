import styles from "../../scss/pages/home.module.scss";
import AboutSection from "./AboutSection";
import HeroBanner from "./HeroBanner";
import PortfolioSection from "./PortfolioSection";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <HeroBanner />
      <AboutSection />
      <PortfolioSection />
    </div>
  );
}
