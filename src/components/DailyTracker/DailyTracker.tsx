import DailyPlan from "./DailyPlan";
import styles from "./DailyTracker.module.css";
import Habit from "./Habit";
import HabitForm from "./HabitForm";

const DailyTracker = () => {
  return (
    <>
      <div className={styles.title}>
        <h2>Your daily plan</h2>
      </div>

      <div className="container">
        <div className={`${styles.daily} row`}>
          <HabitForm />
          <Habit />
          <DailyPlan />
        </div>
      </div>
    </>
  );
};

export default DailyTracker;
