import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
import Card from "react-bootstrap/Card";
import HomePlan1 from "../../assets/HomePlan1.jpg";
import HomePlan2 from "../../assets/HomePlan2.jpg";
import HomePlan3 from "../../assets/HomePlan3.jpg";

const Home = () => {
  return (
    <div className={styles["tracker-cards"]}>
      <Card style={{ width: "18rem" }} className={`${styles["home-card"]}`}>
        <Card.Img
          className={`${styles["card-image"]}`}
          variant="top"
          src={HomePlan2}
        />
        <Card.Body className={`${styles["card-body"]}`}>
          <Card.Title className="text-center mb-4">
            How about making a new plan for tomorrow?
          </Card.Title>

          <NavLink to="/daily" className={`${styles.button}`}>
            Daily Plan
          </NavLink>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }} className={`${styles["home-card"]}`}>
        <Card.Img
          className={`${styles["card-image"]}`}
          variant="top"
          src={HomePlan1}
        />
        <Card.Body className={`${styles["card-body"]}`}>
          <Card.Title className="text-center mb-4">
            Organize your week realistically
          </Card.Title>

          <NavLink to="/" className={`${styles.button}`}>
            Weekly Plan
          </NavLink>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }} className={`${styles["home-card"]}`}>
        <Card.Img
          className={`${styles["card-image"]}`}
          variant="top"
          src={HomePlan3}
        />
        <Card.Body className={`${styles["card-body"]}`}>
          <Card.Title className="text-center mb-4">Card Title</Card.Title>
          <NavLink to="/" className={`${styles.button}`}>
            Monthly Plan
          </NavLink>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
