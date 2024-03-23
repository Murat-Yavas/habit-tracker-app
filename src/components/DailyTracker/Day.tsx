import { useAppSelector } from "../../redux/hooks";
import styles from "./Day.module.css";

import DayItem from "./DayItem";

const Habit = () => {
  const { dailyPlan } = useAppSelector((state) => state.daily);

  return (
    <div
      className={`${styles["daily-habits"]} mb-5 col-md-mb-0 col-12 col-md-6`}
    >
      {dailyPlan.length > 0 ? (
        <>
          <h4 className="mb-4">Your daily plans</h4>
          <div className="container">
            {dailyPlan.map((habit) => (
              <DayItem id={habit.dayId} dayName={habit.day} key={habit.dayId} />
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Habit;
