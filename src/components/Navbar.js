import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>LOGO</div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">Members</a>
        </li>
        <li>
          <a href="#">Calendar</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <ul className={styles.navLinks}>
        <li>
          <a href="#">Register</a>
        </li>
        <li>
          <a href="#">Pay</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
