import styles from "../scss/components/header.module.scss";
import Logo from "../assets/images/logo.png";

export default function Header() {
  const handleClick = (e) => {
    e.preventDefault();
    document
      .getElementById(e.target.getAttribute("target"))
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div className={styles.linkContainer}>
        <a href="" target="about" onClick={handleClick}>
          About
        </a>
        <a href="" target="about" onClick={handleClick}>
          Testimonials
        </a>
      </div>

      <div className={styles.logoSection}>
        <img className={styles.logo} src={Logo} />
      </div>
      <div className={styles.linkContainer}>
        <a href="" target="portfolio" onClick={handleClick}>
          Portfolio
        </a>
        <a href="" target="contact" onClick={handleClick}>
          Contact
        </a>
      </div>
    </nav>
  );
}
