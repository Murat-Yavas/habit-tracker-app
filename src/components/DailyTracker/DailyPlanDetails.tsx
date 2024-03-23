import { useAppSelector } from "../../redux/hooks";
import CardUI from "../UI/CardUI";
import dayImg from "../../assets/HomePlan3.jpg";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import styles from "./DailyPlanDetails.module.css";

const DailyPlanDetails = () => {
  const { dailyPlan } = useAppSelector((state) => state.daily);

  return (
    <>
      <NavLink to="/daily" className={`${styles["to-daily-button"]}`}>
        <Button className="p-1 mb-5" children="New daily plan"></Button>
      </NavLink>
      <div className="container">
        <div className="row">
          {dailyPlan.map((plan) => (
            <CardUI
              key={plan.dayId}
              src={dayImg}
              title={plan.day.toUpperCase()}
              dailyHabitInfos={plan.habitInfo}
              dayName={plan.day}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DailyPlanDetails;
