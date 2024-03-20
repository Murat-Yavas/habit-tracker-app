import Card from "react-bootstrap/Card";
import Button from "./Button";
import styles from "./CardUI.module.css";
import { dailyActions } from "../../redux/daily-slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import { days } from "../../helpers/Constants";

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
  const dailyPlan = useAppSelector((state) => state.daily.userHabit);
  let plan = dailyPlan.find(
    (day) => day.day === dayName && day.habitInfo.length > 0
  );
  console.log(plan);

  const handleDeleteHabit = (id: number) => {
    let selectedDay = dailyPlan.find((day) => day.day === dayName);
    let temp = selectedDay?.habitInfo.filter((h) => h.id === id)!;

    console.log(selectedDay);
    if (selectedDay?.habitInfo.length === 1) {
      temp = [];
    }

    dispatch(dailyActions.deleteHabit({ id, dayName, temp }));
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
                    {dailyHabitInfos.map((h) => (
                      <div
                        key={h.id}
                        className={`${styles["delete-button"]} col-2`}
                        onClick={() => handleDeleteHabit(h.id)}
                      >
                        X
                      </div>
                    ))}
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
