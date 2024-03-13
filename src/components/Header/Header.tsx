import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["main-nav"]}>
      <div className={styles["site-logo"]}>Habit Tracker</div>

      <div className={styles["user-session"]}>Sign In / Sign Up</div>
    </div>
  );
};

export default Header;
