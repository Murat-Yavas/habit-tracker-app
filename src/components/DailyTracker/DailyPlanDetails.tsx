import { useAppSelector } from "../../redux/hooks";
import CardUI from "../UI/CardUI";
import dayImg from "../../assets/HomePlan3.jpg";

const DailyPlanDetails = () => {
  const dailyPlan = useAppSelector((state) => state.daily.dailyPlan);
  console.log(dailyPlan);

  return (
    <div className="container">
      <div className="row">
        {dailyPlan.map((plan) => (
          <CardUI
            key={plan.id}
            src={dayImg}
            title={plan.day.toUpperCase()}
            cardText={plan.habitsOfDay}
            buttonText="View"
          />
        ))}
      </div>
    </div>
  );
};

export default DailyPlanDetails;
