import Card from "react-bootstrap/Card";
import Button from "./Button";
import styles from "./CardUI.module.css";
import { dailyActions } from "../../redux/daily-slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import { toast } from "react-toastify";

interface CardProps {
  src: string;
  title: string;
  dayName: string;
  dailyHabitInfos: {
    id: number;
    name: string;
    endTime: string;
    startTime: string;
  }[];
}

const CardUI = ({ src, title, dailyHabitInfos, dayName }: CardProps) => {
  const dispatch = useAppDispatch();
  const [showCardText, setShowCardText] = useState(false);
  let dailyPlan = useAppSelector((state) => state.daily.dailyPlan);
  console.log(dailyHabitInfos);
  console.log(dailyPlan);

  let plan = dailyPlan.find(
    (day) => day.day === dayName && day.habitInfo.length > 0
  );

  // dailyHabitInfos.sort((a, b) =>
  //   +a.startTime.slice(0, 2) > +b.startTime.slice(0, 2) ? -1 : 1
  // );

  const handleDeleteHabit = (id: number) => {
    let selectedDay = dailyPlan.find((day) => day.day === dayName);

    let temp = selectedDay?.habitInfo.filter((h) => h.id !== id)!;
    if (selectedDay?.habitInfo.length === 1) {
      temp = [];
      dailyPlan = dailyPlan.filter((daily) => daily.day !== plan?.day);
      console.log(dailyPlan);
      dispatch(dailyActions.updateDailyPlan(dailyPlan));
    } else {
      dispatch(dailyActions.deleteHabit({ id, dayName, temp }));
    }

    toast.info(`A habit successfully deleted from ${dayName}`, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      {plan === undefined ? (
        ""
      ) : (
        <Card
          className={`${styles["daily-details-card"]} col-md-3 offset-md-2  p-0`}
        >
          <Card.Img
            variant="top"
            src={src}
            className={`${styles["card-image"]}`}
          />
          <Card.Body className={`${styles["card-body"]}`}>
            <Card.Title className={`${styles["card-title"]} mb-4`}>
              {title}
            </Card.Title>
            {showCardText ? (
              <Card.Text className="container">
                {dailyHabitInfos?.map((habit, index) => (
                  <div
                    className={`${styles["daily-habit-info"]} row`}
                    key={index}
                  >
                    <div className="col-4">{habit.name}</div>
                    <div className="col-6">
                      {habit.startTime} - {habit.endTime}
                    </div>
                    <div
                      className={`${styles["delete-button"]} col-1`}
                      onClick={() => handleDeleteHabit(habit.id)}
                    >
                      X
                    </div>
                  </div>
                ))}
              </Card.Text>
            ) : (
              ""
            )}
          </Card.Body>
          <Button
            children={showCardText ? "Hide" : "View"}
            className={`${styles["view-button"]}`}
            onClick={() => setShowCardText(!showCardText)}
          />
        </Card>
      )}
    </>
  );
};

export default CardUI;
