import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
import Card from "react-bootstrap/Card";
import HomePlan2 from "../../assets/HomePlan2.jpg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getQuotes } from "../../redux/api/apiCall";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useAppDispatch();
  const { quotes } = useAppSelector((state) => state.quotes);
  const { isLogin } = useAppSelector((state) => state.user);

  useEffect(() => {
    getQuotes(dispatch);
  }, []);

  return isLogin ? (
    <div className={styles.home}>
      <div className={styles.quote}>
        {quotes.length > 0 ? (
          <>
            <div className={`${styles["quote-text"]}`}>
              &ldquo;{quotes[Math.floor(Math.random() * 16)].text}&ldquo;
            </div>
            <div>
              {quotes[Math.floor(Math.random() * 16)].author.split(",")[0]}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className={styles["tracker-cards"]}>
        <Card style={{ width: "18rem" }} className={`${styles["home-card"]}`}>
          <Card.Img
            className={`${styles["card-image"]}`}
            variant="top"
            src={HomePlan2}
          />
          <Card.Body className={`${styles["card-body"]}`}>
            <Card.Title className="text-center mb-5">
              How about making a new plan for tomorrow?
            </Card.Title>

            <NavLink to="/daily" className={`${styles.button}`}>
              Daily Plan
            </NavLink>
          </Card.Body>
        </Card>
      </div>
    </div>
  ) : (
    <h2 className="text-white text-center">
      You need to login first to create a tracker plan
    </h2>
  );
};

export default Home;
