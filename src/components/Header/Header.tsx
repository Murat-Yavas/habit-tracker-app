import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["main-nav"]}>
      <div className={styles["site-logo"]}>
        <NavLink to="./" className={styles["site-name"]}>
          Habit Tracker
        </NavLink>
      </div>

      <div className={styles["user-session"]}>
        <NavLink to="./login" className={styles["site-name"]}>
          Sign In / Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
