import styles from "@/styles/Illustration.module.css";

export default function Illustration() {
  return (
    <div className={styles.canvas}>
      <div className={styles.pedestal}>
        <div className={styles.pedestalTop} />
        <div className={styles.pedestalBody} />
        <div className={styles.pedestalShadow} />
      </div>
      <div className={styles.arrangement}>
        <div className={`${styles.dish} ${styles.dishLeft}`}>
          <div className={styles.dishFoodPrimary} />
          <div className={styles.dishFoodAccent} />
        </div>
        <div className={`${styles.dish} ${styles.dishCenter}`}>
          <div className={styles.dishFoodPrimary} />
          <div className={styles.dishFoodAccent} />
          <div className={styles.dishGarnish} />
        </div>
        <div className={`${styles.dish} ${styles.dishRight}`}>
          <div className={styles.dishFoodPrimary} />
          <div className={styles.dishFoodAccent} />
        </div>
      </div>
      <div className={styles.lightHalo} />
      <div className={styles.glassOrb} />
      <div className={styles.sparkleCluster}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
