import styles from "./Page.module.scss";
import scarecrow from "./Scarecrow.png";
const Page = () => {
  return (
    <div className={styles.overview}>
      <div className={styles.overviewTitle}>404 NOT FOUND</div>
      <section className={styles.section}>
        <img className={styles.sectionPic} src={scarecrow} alt="scarecrow" />
        <div className={styles.sectionOverview}>
          <div className={styles.sectionTitle}>I have bad news for you</div>
          <p className={styles.sectionDesc}>
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <button className={styles.button}>BACK TO HOMEPAGE</button>
        </div>
      </section>

      <footer className={styles.footer}>
      created by <b className={styles.username}>shinghuey27</b> - devChallenges.io
      </footer>
    </div>
  );
};

export default Page;
