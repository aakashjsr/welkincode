import styles from "../scss/components/header.module.scss";
import Logo from "../assets/images/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const scrollToSection = (e, section) => {
    e.preventDefault();
    navigate(`/?section=${section}`);
  };

  return (
    <nav>
      <div className={styles.linkContainer}>
        <a href="" onClick={(e) => scrollToSection(e, "about")}>
          About
        </a>
      </div>

      <div className={styles.logoSection}>
        <img
          className={styles.logo}
          src={Logo}
          onClick={(e) => navigate("/")}
        />
      </div>
      <div className={styles.linkContainer}>
        <a href="" onClick={(e) => scrollToSection(e, "portfolio")}>
          Portfolio
        </a>
      </div>
    </nav>
  );
}
