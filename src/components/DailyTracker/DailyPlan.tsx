import { useAppSelector } from "../../redux/hooks";
import styles from "./DailyPlan.module.css";
import Card from "react-bootstrap/Card";
import planImg from "../../assets/plan1.jpg";

const DailyPlan = () => {
  const dailyPlan = useAppSelector((state) => state.daily.dailyPlan);

  return (
    <div className={`${styles["daily-plan"]} col-4`}>
      {dailyPlan.length > 0 ? (
        <Card style={{ width: "18rem" }} className={styles["daily-card"]}>
          <Card.Img variant="top" src={planImg} />
          <Card.Body className={`${styles["daily-body"]}`}>
            <Card.Title className={`${styles["daily-title"]} mb-3 text-center`}>
              Your Daily Plan
            </Card.Title>
            <button className={`${styles["details-button"]}`}>
              See Details
            </button>
          </Card.Body>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
};

export default DailyPlan;
