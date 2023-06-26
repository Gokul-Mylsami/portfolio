import styles from "../styles/Hero.module.css";
import photo from "../public/photo.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.detailsWrapper} id="fade-in-text">
        <div>
          <div className={styles.headingContainer}>
            <h1 className={styles.heading + " " + styles.roleContainer}>
              GOKUL
            </h1>
            <h1 className={styles.heading + " " + styles.roleContainer}>
              MYLSAMI
            </h1>
          </div>
          <div className={styles.infoWrapper}>
            <p className={styles.info}>
              I&apos;m a <span className={styles.role}>Full Stack</span>{" "}
              developer specialised in frontend
            </p>
            <p className={styles.info}>and backend development for complex </p>
            <p className={styles.info}>scalable web apps.</p>
          </div>
        </div>
        <a href="mailto:gokulmylsami@gmail.com" className={styles.button}>
          Say Hi 👋🏻
        </a>
      </div>
      <div className={styles.imgWrapper + " " + "photo"}>
        <Image src={photo} alt="my-photo" />
      </div>
    </div>
  );
};

export default HeroSection;
