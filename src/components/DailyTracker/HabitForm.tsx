import { useState } from "react";
import styles from "./HabitForm.module.css";
import Form from "react-bootstrap/Form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { dailyActions } from "../../redux/daily-slice";
import Button from "../UI/Button";
import { days } from "../../helpers/Constants";
import { toast } from "react-toastify";

let habitNumber = 0;

const HabitForm = () => {
  const [day, setDay] = useState("");
  const [habitText, setHabitText] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const dispatch = useAppDispatch();
  console.log(+startTime.slice(0, 2));

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (habitText === "" || startTime === "" || endTime === "")
      toast.info("Inputs cannot be left blank", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    else if (
      +startTime.slice(0, 2) > +endTime.slice(0, 2) ||
      (parseInt(startTime) === parseInt(endTime) &&
        +startTime.slice(3, 5) > +endTime.slice(3, 5))
    ) {
      toast.info("End time cannot be bigger than start time", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (habitText.length > 10) {
      toast.info("A maximum of 10 characters can be entered", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const userHabit = {
        habitName: habitText,
        startTime,
        endTime,
        day,
        habitId: habitNumber,
      };
      dispatch(dailyActions.addHabit(userHabit));
      setHabitText("");
      setStartTime("");
      setEndTime("");

      toast.info(
        `Habit ${habitText.toUpperCase()} successfully saved for ${day}`,
        {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }
    habitNumber++;
    e.preventDefault();
  };

  return (
    <>
      <div
        className={`${styles["add-habit-section"]} mb-5 col-md-mb-0 col-12 col-md-6`}
      >
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
                className={styles["add-habit-button"]}
                onClick={handleSave}
                children="Save"
              />
            </div>
          </Form>
        </>
      </div>
    </>
  );
};

export default HabitForm;
