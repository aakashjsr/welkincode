import styles from "../scss/components/header.module.scss";
import Logo from "../assets/images/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const scrollToSection = (e, target) => {
    e.preventDefault();
    document.getElementById(target).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  const path = window.location.pathname;
  const [showMenu, setShowMenu] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (path === "/") setShowMenu(true);
    else setShowMenu(false);
  }, [path]);

  return (
    <nav>
      <div className={styles.linkContainer}>
        {showMenu && (
          <a href="" onClick={(e) => scrollToSection(e, "about")}>
            About
          </a>
        )}
      </div>

      <div className={styles.logoSection}>
        <img
          className={styles.logo}
          src={Logo}
          onClick={(e) => navigate("/")}
        />
      </div>
      <div className={styles.linkContainer}>
        {showMenu && (
          <a href="" onClick={(e) => scrollToSection(e, "portfolio")}>
            Portfolio
          </a>
        )}
      </div>
    </nav>
  );
}
