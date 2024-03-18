import { NavLink } from "react-router-dom";
import styles from "./HabitItem.module.css";

interface HabitItem {
  id: number;
  day: string;
  key: number;
  // createDailyFn: () => void;
}

const HabitItem = ({ id, day }: HabitItem) => {
  return (
    <div key={id} className={`${styles["daily-habit"]} row`}>
      <NavLink
        // onClick={createDailyFn}
        to="/daily/details"
        className={`${styles["daily-habit-name"]} col-12 text-center`}
      >
        {day}
      </NavLink>
    </div>
  );
};

export default HabitItem;
