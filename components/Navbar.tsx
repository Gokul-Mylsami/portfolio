import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarElements}>
        <h1 className={styles.heading}>
          Gokul <span className={styles.dot}>.</span>
        </h1>
        <ul className={styles.navbarLinksContainer}>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
