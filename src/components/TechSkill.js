import django from "../assets/images/skill/django.png";
import docker from "../assets/images/skill/docker.png";
import html from "../assets/images/skill/html.png";
import css from "../assets/images/skill/css.jpeg";
import sass from "../assets/images/skill/sass.png";
import js from "../assets/images/skill/js.png";
import react from "../assets/images/skill/react.png";
import python from "../assets/images/skill/python.jpeg";
import aws from "../assets/images/skill/aws.jpeg";
import postgres from "../assets/images/skill/postgres.png";
import mysql from "../assets/images/skill/mysql.png";
import serviceNow from "../assets/images/company/servicenow.png";

import styles from "../scss/components/techSkill.module.scss";

export default function TechSkill({ techName, textColor, circleImage }) {
  const techMap = {
    react: { icon: react, text: "react" },
    django: { icon: django, text: "django" },
    docker: { icon: docker, text: "docker" },
    html: { icon: html, text: "html" },
    css: { icon: css, text: "css" },
    sass: { icon: sass, text: "sass" },
    javascript: { icon: js, text: "javascript" },
    python: { icon: python, text: "python" },
    aws: { icon: aws, text: "aws" },
    postgres: { icon: postgres, text: "postgres" },
    mysql: { icon: mysql, text: "mysql" },
    servicenow: { icon: serviceNow, text: "servicenow" },
  };
  const style = {};
  if (textColor) style.color = textColor;
  return (
    <div className={styles.skillIcon}>
      <img
        src={techMap[techName]?.icon}
        height="50"
        width="50"
        style={{ borderRadius: circleImage ? "50%" : 0 }}
      />
      <span style={style}>{techMap[techName]?.text}</span>
    </div>
  );
}
