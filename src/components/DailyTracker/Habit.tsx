import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { dailyActions } from "../../redux/daily-slice";
import styles from "./Habit.module.css";

import HabitItem from "./HabitItem";

const Habit = () => {
  const dispatch = useAppDispatch();
  const habits = useAppSelector((state) => state.daily.userHabit);

  const createDaily = (): void => {
    dispatch(dailyActions.createDailyPlan(habits));
    // dispatch(dailyActions.setHabits([]));
  };

  return (
    <div
      className={`${styles["daily-habits"]} mb-5 col-md-mb-0 col-12 col-md-6`}
    >
      {habits.length > 0 ? (
        <>
          <h4 className="mb-4">Your daily plans</h4>
          <div className="container">
            {habits.map((habit) => (
              <HabitItem
                id={habit.id}
                habitName={habit.habitName}
                startTime={habit.startTime}
                endTime={habit.endTime}
                day={habit.day}
                key={habit.id}
                createDailyFn={createDaily}
              />
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
