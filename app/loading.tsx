import styles from "./page.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      Getting data on the server.
    </div>
  );
}
