import styles from "../scss/components/particles.module.scss";

const getRandomInt = (start, end) => Math.floor(Math.random() * end) + start;

export default function Particles() {
  const count = 50;
  return [...Array(count)].map((el, index) => (
    <div
      key={index}
      className={styles.particle}
      style={{
        animation: `${styles.particleMovement} ${getRandomInt(
          5,
          7
        )}s linear ${getRandomInt(1, 3)}s infinite`,
        left: `${(100 / count) * index}vw`,
        bottom: 0,
      }}
    ></div>
  ));
}
