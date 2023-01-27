import styles from "../scss/components/header.module.scss";
import Logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <nav>
      <div className={styles.linkContainer}>
        <a href="/?section=about">About</a>
      </div>

      <div className={styles.logoSection}>
        <a href="/">
          <img className={styles.logo} src={Logo} />
        </a>
      </div>
      <div className={styles.linkContainer}>
        <a href="/?section=portfolio">Portfolio</a>
      </div>
    </nav>
  );
}
