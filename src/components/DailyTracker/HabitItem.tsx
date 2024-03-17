import { NavLink } from "react-router-dom";
import { dailyActions } from "../../redux/daily-slice";
import { useAppDispatch } from "../../redux/hooks";
import styles from "./HabitItem.module.css";

interface HabitItem {
  id: number;
  habitName: string;
  startTime: string;
  endTime: string;
  day: string;
  key: number;
  createDailyFn: () => void;
}

const HabitItem = ({
  id,
  habitName,
  startTime,
  endTime,
  day,
  createDailyFn,
}: HabitItem) => {
  const dispatch = useAppDispatch();

  const HandledeleteHabit = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number
  ) => {
    dispatch(dailyActions.deleteHabit(id));
    e.stopPropagation();
  };

  return (
    <div key={id} className={`${styles["daily-habit"]} row`}>
      <NavLink
        onClick={createDailyFn}
        to="/daily/details"
        className={`${styles["daily-habit-name"]} col-12 text-center`}
      >
        {day}
      </NavLink>
      {/* <div className={`${styles["daily-habit-time"]} col-6`}>
        {startTime} - {endTime}
      </div> */}
      {/* <div
        className={`${styles["delete-button"]} col-2`}
        onClick={(e) => HandledeleteHabit(e, id)}
      >
        X
      </div> */}
    </div>
  );
};

export default HabitItem;
