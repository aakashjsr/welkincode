import styles from "../../scss/pages/home.module.scss";

import homeBackground from "../../assets/images/homeBackground.png";
import Particles from "../../components/Particles";

export default function HeroBanner() {
  return (
    <section className={styles.heroBanner}>
      <Particles />
      <div className={styles.bannerTitle}>
        <h1>Fullstack Development</h1>
        <h3>
          Web Design is more than just making things look pretty. It’s about
          telling a story through the visuals that get your ideas across to your
          customers.
          <br />
          <br />
          We help you turn ideas into reality. Let’s build something amazing
          together!
        </h3>
        <div>div</div>
      </div>

      <div className={styles.bannerImage}>
        <img src={homeBackground} />
      </div>
    </section>
  );
}
