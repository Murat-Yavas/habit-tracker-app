import { useAppSelector } from "../../redux/hooks";
import CardUI from "../UI/CardUI";
import dayImg from "../../assets/HomePlan3.jpg";

const DailyPlanDetails = () => {
  const dailyPlan = useAppSelector((state) => state.daily.userHabit);

  return (
    <div className="container">
      <div className="row">
        {dailyPlan.map((plan) => (
          <CardUI
            key={plan.dayId}
            src={dayImg}
            title={plan.day.toUpperCase()}
            dailyHabitInfos={plan.habitInfo}
            dayName={plan.day}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyPlanDetails;
