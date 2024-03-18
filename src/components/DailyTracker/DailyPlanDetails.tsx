import { useAppSelector } from "../../redux/hooks";
import CardUI from "../UI/CardUI";
import dayImg from "../../assets/HomePlan3.jpg";

const DailyPlanDetails = () => {
  const dailyPlan = useAppSelector((state) => state.daily.userHabit);
  // const habits = useAppSelector((state) => state.daily.userHabit);
  // console.log(habits);
  console.log(dailyPlan);

  return (
    <div className="container">
      <div className="row">
        {dailyPlan.map((plan) => (
          <CardUI
            key={plan.id}
            src={dayImg}
            title={plan.day.toUpperCase()}
            cardHabitText={plan.habitsOfDay}
            habitsStartTimeText={plan.habitsStartTime}
            habitsEndTimeText={plan.habitsEndTime}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyPlanDetails;
