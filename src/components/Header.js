import styles from "../scss/components/header.module.scss";
import Logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <nav>
      <a href="">About</a>
      <img className={styles.logo} src={Logo} />
      <a href="">Portfolio</a>
    </nav>
  );
}
