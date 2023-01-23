import styles from "../scss/components/header.module.scss";
import Logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <nav>
      <div className={styles.linkContainer}>
        <a href="">About</a>
      </div>

      <div className={styles.logoSection}>
        <img className={styles.logo} src={Logo} />
      </div>
      <div className={styles.linkContainer}>
        <a href="">Portfolio</a>
      </div>
    </nav>
  );
}
