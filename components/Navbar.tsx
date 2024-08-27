import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { saveAs } from "file-saver";
const Navbar = () => {
  return (
    <nav className={styles.navbarContainer} id="fade-in-text">
      <div className={styles.navbarElements}>
        <h1 className={styles.heading}>
          Gokul <span className={styles.dot}>.</span>
        </h1>
        <a
          className={styles.navbarLinksContainer}
          href="https://drive.google.com/file/d/1C3HMeoyvOP8kxFxof3nVxwfgX-WRqdjL/view?usp=sharing"
          download="Resume.pdf"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
