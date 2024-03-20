import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./Habit.module.css";

import HabitItem from "./HabitItem";

const Habit = () => {
  const dispatch = useAppDispatch();
  const habits = useAppSelector((state) => state.daily.userHabit);

  return (
    <div
      className={`${styles["daily-habits"]} mb-5 col-md-mb-0 col-12 col-md-6`}
    >
      {habits.length > 0 ? (
        <>
          <h4 className="mb-4">Your daily plans</h4>
          <div className="container">
            {habits.map((habit) => (
              <HabitItem id={habit.dayId} day={habit.day} key={habit.dayId} />
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
