import styles from "./page.module.css";

import Gallery from "./gallery";

export default async function Home() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );


  return (
    <main className={styles.main}>
      <Gallery users={users} />
    </main>
  );
}
