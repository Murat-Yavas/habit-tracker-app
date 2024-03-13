import { useState } from "react";
import styles from "./DailyTracker.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const DailyTracker = () => {
  const [isShownForm, setIsShownForm] = useState(false);

  const handleAddDaily = () => {
    setIsShownForm(true);
  };

  return (
    <>
      <div className={styles.title}>
        <h2>Your daily plan</h2>
      </div>

      <div className={`${styles["habit-area"]} container`}>
        <div className={`${styles.daily} row`}>
          <div className={`${styles["add-habit-section"]} col-3`}>
            {!isShownForm ? (
              <button
                className={styles["add-habit-button"]}
                onClick={handleAddDaily}
              >
                Add a new daily plan
              </button>
            ) : (
              <>
                <h4 className="mb-3">Let's add your habit </h4>
                <Form className={styles["habit-form"]}>
                  <Form.Group className="mb-3" controlId="formBasicHabit">
                    <Form.Label>Habit</Form.Label>
                    <Form.Control type="text" placeholder="Enter habit" />
                  </Form.Group>
                  <div className="mb-3">
                    <label>Start Time</label>
                    <input
                      type="time"
                      className="form-control"
                      value="10:05 AM"
                    />
                  </div>

                  <div className="mb-3">
                    <label>End Time</label>
                    <input
                      type="time"
                      className="form-control"
                      value="10:05 AM"
                    />
                  </div>

                  <div className={`${styles["form-buttons"]}`}>
                    <button
                      onClick={() => setIsShownForm(false)}
                      className={`${styles["add-habit-button"]} ${styles["form-button"]}`}
                    >
                      Cancel
                    </button>
                    <button className={styles["add-habit-button"]}>Save</button>
                  </div>
                </Form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyTracker;
