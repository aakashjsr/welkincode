import { Helmet } from "react-helmet";
import styles from "../scss/pages/home.module.scss";

import homeBackground from "../assets/images/homeBackground.png";

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
        <section className={styles.heroBanner}>
          {/* {[...Array(100)].map((e, index) => (
            <div className={styles.particle}>.</div>
          ))} */}
          <div className={styles.bannerTitle}>
            <h1>Fullstack Development</h1>
            <h3>
              Web Design is more than just making things look pretty. It’s about
              telling a story through the visuals that get your ideas across to
              your customers.
              <br />
              <br />
              We help you turn ideas into reality. Let’s build something amazing
              together!
            </h3>
          </div>

          <div className={styles.bannerImage}>
            <img src={homeBackground} />
          </div>
        </section>

        <section className={styles.technologies}></section>
      </div>
    </>
  );
}
