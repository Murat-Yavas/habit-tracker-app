import { useState } from "react";
import styles from "./DailyTracker.module.css";
import Form from "react-bootstrap/Form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { dailyActions } from "../../redux/daily-slice";

const DailyTracker = () => {
  const [isShownForm, setIsShownForm] = useState(false);
  const [habitText, setHabitText] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const dispatch = useAppDispatch();
  const habit = useAppSelector((state) => state.daily.userHabit);
  console.log(habit);

  const handleAddHabit = () => {
    setIsShownForm(true);
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const userHabit = {
      habitName: habitText,
      startTime,
      endTime,
    };
    dispatch(dailyActions.addHabit(userHabit));
  };

  return (
    <>
      <div className={styles.title}>
        <h2>Your daily plan</h2>
      </div>

      <div className="container">
        <div className={`${styles.daily} row`}>
          <div className={`${styles["add-habit-section"]} col-4`}>
            {!isShownForm ? (
              <button
                className={styles["add-habit-button"]}
                onClick={handleAddHabit}
              >
                Add a new daily plan
              </button>
            ) : (
              <>
                <h4 className="mb-3">Let's add your habit </h4>
                <Form className={styles["habit-form"]}>
                  <Form.Group className="mb-3" controlId="formBasicHabit">
                    <Form.Label>Habit</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter habit"
                      onChange={(e) => setHabitText(e.target.value)}
                    />
                  </Form.Group>
                  <div className="mb-3">
                    <label>Start Time</label>
                    <input
                      onChange={(e) => setStartTime(e.target.value)}
                      type="time"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label>End Time</label>
                    <input
                      onChange={(e) => setEndTime(e.target.value)}
                      type="time"
                      className="form-control"
                    />
                  </div>

                  <div className={`${styles["form-buttons"]}`}>
                    <button
                      onClick={() => setIsShownForm(false)}
                      className={`${styles["add-habit-button"]} ${styles["form-button"]}`}
                    >
                      Cancel
                    </button>
                    <button
                      className={styles["add-habit-button"]}
                      onClick={handleSave}
                    >
                      Save
                    </button>
                  </div>
                </Form>
              </>
            )}
          </div>

          <div className={`${styles["daily-habits"]} col-4`}></div>
        </div>
      </div>
    </>
  );
};

export default DailyTracker;
