import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles["tracker-buttons"]}>
      <p>
        <NavLink to="/daily" className={`${styles.button}`}>
          Add Daily
        </NavLink>
      </p>

      <p>
        <NavLink to="/" className={`${styles.button}`}>
          Add Weekly
        </NavLink>
      </p>

      <p>
        <NavLink to="/" className={`${styles.button}`}>
          Add Monthly
        </NavLink>
      </p>
    </div>
  );
};

export default Home;
