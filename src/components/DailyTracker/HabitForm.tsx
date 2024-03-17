import { useState } from "react";
import styles from "./HabitForm.module.css";
import Form from "react-bootstrap/Form";
import { useAppDispatch } from "../../redux/hooks";
import { dailyActions } from "../../redux/daily-slice";
import Button from "../UI/Button";
import { days } from "../../helpers/Constants";

const HabitForm = () => {
  const [isShownForm, setIsShownForm] = useState(false);
  const [day, setDay] = useState("");
  const [habitText, setHabitText] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const dispatch = useAppDispatch();

  const handleAddHabit = () => {
    setIsShownForm(true);
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (habitText === "" || startTime === "" || endTime === "")
      alert("Inputs cannot be left blank");
    else if (+startTime.slice(0, 2) > +endTime.slice(0, 2)) {
      alert("End time cannot be bigger than start time");
    } else if (
      parseInt(startTime) === parseInt(endTime) &&
      +startTime.slice(3, 5) > +endTime.slice(3, 5)
    ) {
      alert("end minute ");
    } else {
      const userHabit = {
        habitName: habitText,
        startTime,
        endTime,
        day,
      };
      dispatch(dailyActions.addHabit(userHabit));
      setHabitText("");
      setStartTime("");
      setEndTime("");
    }
  };

  return (
    <>
      <div
        className={`${styles["add-habit-section"]} mb-5 col-md-mb-0 col-12 col-md-6`}
      >
        {!isShownForm ? (
          <button
            className={styles["add-habit-button"]}
            onClick={handleAddHabit}
          >
            Add a new daily plan
          </button>
        ) : (
          <>
            <h4 className="mb-3">Let's add your habit</h4>

            <Form className={styles["habit-form"]}>
              <div className={`${styles["day-options"]}`}>
                <Form.Label htmlFor="days">Day</Form.Label>
                <Form.Select
                  id="days"
                  className="mb-3"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                >
                  <option value="DEFAULT">Choose a day</option>

                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </Form.Select>
              </div>

              <Form.Group className="mb-3" controlId="formBasicHabit">
                <Form.Label>Habit</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter habit"
                  onChange={(e) => setHabitText(e.target.value)}
                  value={habitText}
                />
              </Form.Group>

              <div className="mb-3">
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  onChange={(e) => setStartTime(e.target.value)}
                  type="time"
                  className="form-control"
                  value={startTime}
                />
              </div>

              <div className="mb-3">
                <Form.Label>End Time</Form.Label>
                <Form.Control
                  onChange={(e) => setEndTime(e.target.value)}
                  type="time"
                  className="form-control"
                  value={endTime}
                />
              </div>

              <div className={`${styles["form-buttons"]}`}>
                <Button
                  onClick={() => setIsShownForm(false)}
                  className={`${styles["add-habit-button"]} ${styles["form-button"]}`}
                  children="Cancel"
                />
                <Button
                  className={styles["add-habit-button"]}
                  onClick={handleSave}
                  children="Save"
                />
              </div>
            </Form>
          </>
        )}
      </div>
    </>
  );
};

export default HabitForm;
