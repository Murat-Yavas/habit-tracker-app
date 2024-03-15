import { dailyActions } from "../../redux/daily-slice";
import { useAppDispatch } from "../../redux/hooks";
import styles from "./HabitItem.module.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface HabitItem {
  id: number;
  habitName: string;
  startTime: string;
  endTime: string;
  key: number;
}

const HabitItem = ({ id, habitName, startTime, endTime }: HabitItem) => {
  const dispatch = useAppDispatch();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = { transition, transform: CSS.Transform.toString(transform) };

  const HandledeleteHabit = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number
  ) => {
    dispatch(dailyActions.deleteHabit(id));
    e.stopPropagation();
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      key={id}
      className={`${styles["daily-habit"]} row`}
    >
      <div className={`${styles["daily-habit-name"]} col-4`}>{habitName}</div>
      <div className={`${styles["daily-habit-time"]} col-6`}>
        {startTime} - {endTime}
      </div>
      <div
        className={`${styles["delete-button"]} col-2`}
        onClick={(e) => HandledeleteHabit(e, id)}
      >
        X
      </div>
    </div>
  );
};

export default HabitItem;
