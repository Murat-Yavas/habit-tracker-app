import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Button from "../UI/Button";
import { userActions } from "../../redux/user-slice";

const Header = () => {
  const dispatch = useAppDispatch();
  const { isLogin } = useAppSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(userActions.logout());
  };

  return (
    <div className={styles["main-nav"]}>
      <div className={styles["site-logo"]}>
        <NavLink to="/" className={styles["site-name"]}>
          Habit Tracker
        </NavLink>
      </div>

      <div className={styles["user-session"]}>
        {isLogin ? (
          <Button onClick={handleLogout} className={styles["log-button"]}>
            Logout
          </Button>
        ) : (
          <NavLink to="/login" className={styles["log-button"]}>
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
