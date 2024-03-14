import DailyPlan from "./DailyPlan";
import Habit from "./Habit";
import HabitForm from "./HabitForm";

const DailyTracker = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <HabitForm />
          <Habit />
          <DailyPlan />
        </div>
      </div>
    </>
  );
};

export default DailyTracker;
