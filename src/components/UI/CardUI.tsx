import Card from "react-bootstrap/Card";
import Button from "./Button";
import styles from "./CardUI.module.css";
import { dailyActions } from "../../redux/daily-slice";
import { useAppDispatch } from "../../redux/hooks";
import { useState } from "react";

interface CardProps {
  src: string;
  title: string;
  cardHabitText?: string[];
  habitsStartTimeText: string[];
  habitsEndTimeText: string[];
}

const CardUI = ({
  src,
  title,
  cardHabitText,
  habitsStartTimeText,
  habitsEndTimeText,
}: CardProps) => {
  const dispatch = useAppDispatch();
  const [showCardText, setShowCardText] = useState(false);

  const HandledeleteHabit = (id: number) => {
    console.log(cardHabitText);
    // dispatch(dailyActions.deleteHabit(id));
  };

  return (
    <Card
      className={`${styles["daily-details-card"]} col-md-3 offset-md-2  p-0`}
    >
      <Card.Img variant="top" src={src} className={`${styles["card-image"]}`} />
      <Card.Body className={`${styles["card-body"]}`}>
        <Card.Title className={`${styles["card-title"]} mb-4`}>
          {title}
        </Card.Title>
        {showCardText ? (
          <Card.Text className="container">
            {cardHabitText?.map((habitText, index) => (
              <div className={`${styles["daily-habit-info"]} row`} key={index}>
                <div className="col-4">{habitText}</div>
                <div className="col-6">
                  {habitsStartTimeText[index]} - {habitsEndTimeText[index]}
                </div>
                <div
                  className={`${styles["delete-button"]} col-2`}
                  onClick={() => HandledeleteHabit(index)}
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
  );
};

export default CardUI;
