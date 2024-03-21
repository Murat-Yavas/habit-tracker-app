import Day from "./Day";
import HabitForm from "./HabitForm";

const DailyTracker = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <HabitForm />
          <Day />
        </div>
      </div>
    </>
  );
};

export default DailyTracker;
