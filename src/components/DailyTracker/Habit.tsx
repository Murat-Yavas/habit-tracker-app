import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { dailyActions } from "../../redux/daily-slice";
import styles from "./Habit.module.css";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import HabitItem from "./HabitItem";
import Button from "../UI/Button";

const Habit = () => {
  const dispatch = useAppDispatch();
  const habits = useAppSelector((state) => state.daily.userHabit);

  const createDaily = (): void => {
    dispatch(dailyActions.createDailyPlan(habits));
  };

  return (
    <div
      className={`${styles["daily-habits"]} mb-5 col-md-mb-0 col-12 col-md-4`}
    >
      {habits.length > 0 ? (
        <>
          <h4 className="mb-4">Your daily habits </h4>
          <div className="container">
            <SortableContext
              items={habits}
              strategy={verticalListSortingStrategy}
            >
              {habits.map((habit: any) => (
                <HabitItem
                  id={habit.id}
                  habitName={habit.habitName}
                  startTime={habit.startTime}
                  endTime={habit.endTime}
                  key={habit.id}
                />
              ))}
            </SortableContext>
          </div>
          <div>
            <Button
              className={`${styles["create-daily-button"]}`}
              onClick={createDaily}
              children="Create"
            />
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Habit;
