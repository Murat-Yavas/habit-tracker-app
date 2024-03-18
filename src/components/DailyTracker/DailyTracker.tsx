import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Habit from "./Habit";
import HabitForm from "./HabitForm";

import { dailyActions } from "../../redux/daily-slice";

const DailyTracker = () => {
  let habits = useAppSelector((state) => state.daily.userHabit);
  const dispatch = useAppDispatch();

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
