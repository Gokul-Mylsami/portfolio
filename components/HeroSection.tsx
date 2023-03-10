import styles from "../styles/Hero.module.css";
import photo from "../public/photo.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.detailsWrapper}>
        <div>
          <div className={styles.headingContainer}>
            <h1 className={styles.heading + " " + styles.roleContainer}>
              Hi <span className={styles.colorTeritiary}>!</span> I Am{" "}
            </h1>
            <h1 className={styles.heading + " " + styles.name}>
              Gokul Mylsami
            </h1>
          </div>
          <div className={styles.infoWrapper}>
            <p className={styles.info}>
              I'm a <span className={styles.role}>Full Stack</span> developer
              specialised in frontend
            </p>
            <p className={styles.info}>and backend development for complex </p>
            <p className={styles.info}>scalable web apps.</p>
          </div>
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <Image src={photo} />
      </div>
    </div>
  );
};

export default HeroSection;
