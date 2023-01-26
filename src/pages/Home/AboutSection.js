import styles from "../../scss/pages/home.module.scss";
import profileImg from "../../assets/images/aakash.jpeg";
import serviceNow from "../../assets/images/servicenow.png";
import toptal from "../../assets/images/toptal.png";
import codementor from "../../assets/images/codementor.jpeg";
import lji from "../../assets/images/lji.jpeg";
import jtg from "../../assets/images/jtg.jpeg";
import reportgarden from "../../assets/images/reportgarden.png";
import django from "../../assets/images/django.png";
import docker from "../../assets/images/docker.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.jpeg";
import sass from "../../assets/images/sass.png";
import js from "../../assets/images/js.png";
import react from "../../assets/images/react.png";
import python from "../../assets/images/python.jpeg";
import aws from "../../assets/images/aws.jpeg";
import postgres from "../../assets/images/postgres.png";
import mysql from "../../assets/images/mysql.png";
import linkedin from "../../assets/images/linkedin.png";
import fiverr from "../../assets/images/fiverr.png";
import medium from "../../assets/images/medium.png";
import gmail from "../../assets/images/gmail.png";

function ExperienceRow({ companyName, role, tenure, icon }) {
  return (
    <div className={styles.experienceRow}>
      <div className={styles.companyIcon}>
        <img src={icon} height="50" width="50" />
      </div>
      <div className={styles.companyDetails}>
        <div>
          {companyName} ({tenure})
        </div>
        <div>{role}</div>
      </div>
    </div>
  );
}

function SkillItem({ logo, text }) {
  return (
    <div className={styles.skillIcon}>
      <img src={logo} height="50" width="50" />
      {text}
    </div>
  );
}

function SocialMediaItem({ icon, url }) {
  return (
    <div className={styles.socialMediaItem}>
      <img
        src={icon}
        height="40"
        width="40"
        onClick={(e) => window.open(url)}
      />
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h1 className={styles.heading}>About</h1>
      <div className={styles.myInfo}>
        <div className={styles.bioImg}>
          <img src={profileImg} height="300rem" />
          <div className={styles.socialSection}>
            <SocialMediaItem
              icon={linkedin}
              url="https://www.linkedin.com/in/aakash94/"
            />
            <SocialMediaItem icon={gmail} url="mailto: aakashjsr@gmail.com" />
            <SocialMediaItem
              icon={codementor}
              url="https://www.codementor.io/@aakashkumardas"
            />
            <SocialMediaItem
              icon={toptal}
              url="https://www.toptal.com/resume/aakash-kumar-das"
            />
            <SocialMediaItem
              icon={fiverr}
              url="https://www.fiverr.com/aakashjsr"
            />
          </div>
        </div>
        <div className={styles.bioText}>
          <h3>HEY THERE!</h3>
          <h1>I'm Aakash</h1>
          <p>
            I'm a seasoned software engineer specializing in full stack
            development. I have 8 years of experience in architecting and
            developing products for startups and established companies across
            the globe. <br />
            <br />
            These include eCommerce, real estate, foodtech, energy efficiency,
            and healthcare solutions. I have a deep passion and enthusiasm for
            software development and enabling businesses to succeed and grow
            through technology.
          </p>
        </div>
      </div>
      <div className={styles.experienceSection}>
        <div className={styles.experience}>
          <h1>Experience</h1>
          <ExperienceRow
            companyName="ServiceNow"
            role="Senior Software Engineer"
            tenure="2017 - Present"
            icon={serviceNow}
          />
          <ExperienceRow
            companyName="Toptal"
            role="Full Stack Engineer"
            tenure="2021 - Present"
            icon={toptal}
          />
          <ExperienceRow
            companyName="Codementor"
            role="Full Stack Engineer"
            tenure="2018 - Present"
            icon={codementor}
          />
          <ExperienceRow
            companyName="Loyalty Juggernaut Inc"
            role="Senior Product Engineer"
            tenure="2018 - 2019"
            icon={lji}
          />
          <ExperienceRow
            companyName="ReportGarden Inc "
            role="Full Stack Engineer"
            tenure="2017 - 2018"
            icon={reportgarden}
          />
          <ExperienceRow
            companyName="Josh Technology Group "
            role="Software Engineer"
            tenure="2015 - 2017"
            icon={jtg}
          />
        </div>
        <div className={styles.skills}>
          <h1>Skills & Achievements</h1>
          <h3>ACHIEVEMENTS</h3>
          <ul>
            <li>
              Single-handedly developed a marketplace platform that raised
              pre-seed funding of $100,000.
            </li>
            <li>
              Engineer at Toptal which hires the top 3% developer around the
              globe
            </li>
            <li>100% happy and satisfied clients around the globe</li>
          </ul>
          <h3>SKILLS</h3>
          <div className={styles.skillIcons}>
            <SkillItem logo={python} text="python" />
            <SkillItem logo={django} text="django" />
            <SkillItem logo={html} text="html" />
            <SkillItem logo={css} text="css" />
            <SkillItem logo={sass} text="sass" />
            <SkillItem logo={js} text="javascript" />
            <SkillItem logo={react} text="react" />
            <SkillItem logo={aws} text="aws" />
            <SkillItem logo={docker} text="docker" />
            <SkillItem logo={postgres} text="postgres" />
            <SkillItem logo={mysql} text="mysql" />
            <SkillItem logo={serviceNow} text="servicenow" />
          </div>
        </div>
      </div>
    </section>
  );
}
