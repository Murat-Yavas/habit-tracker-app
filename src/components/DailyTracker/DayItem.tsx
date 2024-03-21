import { NavLink } from "react-router-dom";
import styles from "./DayItem.module.css";
import { useAppSelector } from "../../redux/hooks";

interface HabitItem {
  id: number;
  dayName: string;
  key: number;
}

const HabitItem = ({ id, dayName }: HabitItem) => {
  const dailyPlan = useAppSelector((state) => state.daily.userHabit);

  let plan = dailyPlan.find((day) => day.day === dayName);

  return plan?.habitInfo.length === 0 ? (
    ""
  ) : (
    <div key={id} className={`${styles["daily-habit"]} row`}>
      <NavLink
        to="/daily/details"
        className={`${styles["daily-habit-info"]} col-12 text-center`}
      >
        <div className="col-6">{dayName}</div>
        <div>{plan?.habitInfo.length} habit(s)</div>
      </NavLink>
    </div>
  );
};

export default HabitItem;
//plan?.habitInfo.length
