import styles from "../scss/components/header.module.scss";
import Logo from "../assets/images/logo.png";

export default function Header() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div className={styles.linkContainer}>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          About
        </a>
      </div>

      <div className={styles.logoSection}>
        <img className={styles.logo} src={Logo} />
      </div>
      <div className={styles.linkContainer}>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("portfolio");
          }}
        >
          Portfolio
        </a>
      </div>
    </nav>
  );
}
