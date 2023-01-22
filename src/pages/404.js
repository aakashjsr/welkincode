import styles from "../scss/pages/404.module.scss";

export default function LostPage() {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <a href="/">Back To Home</a>
    </div>
  );
}
