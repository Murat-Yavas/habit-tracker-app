import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { dailyActions } from "../../redux/daily-slice";
import styles from "./Habit.module.css";

const Habit = () => {
  const dispatch = useAppDispatch();
  const habits = useAppSelector((state) => state.daily.userHabit);
  console.log(habits);

  const createDaily = (): void => {
    dispatch(dailyActions.createDailyPlan(habits));
  };

  const HandledeleteHabit = (id: number) => {
    dispatch(dailyActions.deleteHabit(id));
  };

  return (
    <>
      <div className={`${styles["daily-habits"]} col-4`}>
        {habits.length > 0 ? (
          <>
            <h4 className="mb-4">Your daily habits </h4>
            <div className="container">
              {habits.map((habit) => (
                <div key={habit.id} className={`${styles["daily-habit"]} row`}>
                  <div className={`${styles["daily-habit-name"]} col-4`}>
                    {habit.habitName}
                  </div>
                  <div className={`${styles["daily-habit-time"]} col-6`}>
                    {habit.startTime} - {habit.endTime}
                  </div>
                  <div
                    className="col-2"
                    onClick={() => HandledeleteHabit(habit.id)}
                  >
                    X
                  </div>
                </div>
              ))}
            </div>
            <div>
              <button
                className={`${styles["create-daily-button"]}`}
                onClick={createDaily}
              >
                Create
              </button>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Habit;
