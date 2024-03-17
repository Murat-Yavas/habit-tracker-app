import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Habit from "./Habit";
import HabitForm from "./HabitForm";

import { dailyActions } from "../../redux/daily-slice";

const DailyTracker = () => {
  let habits = useAppSelector((state) => state.daily.userHabit);
  const dispatch = useAppDispatch();

  const getHabitPos = (id: number) =>
    habits.findIndex((habit) => habit.id === id);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    const originalPosition = getHabitPos(active.id);
    const newPosition = getHabitPos(over.id);

    dispatch(dailyActions.setHabits(habits));

    return habits;
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <HabitForm />
          <Habit />
          {/* <DailyPlan /> */}
        </div>
      </div>
    </>
  );
};

export default DailyTracker;
