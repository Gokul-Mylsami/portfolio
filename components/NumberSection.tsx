import styles from "../styles/NumberSection.module.css";

const NumberSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.individual}>
        <span className={styles.number}>4</span>
        <span className={styles.title}>Production Level Applications</span>
      </div>
      <div className={styles.individual}>
        <span className={styles.number}>1+</span>
        <span className={styles.title}>Experience</span>
      </div>
      <div className={styles.individual}>
        <span className={styles.number}>8+</span>
        <span className={styles.title}>Projects</span>
      </div>
    </div>
  );
};

export default NumberSection;
