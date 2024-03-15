import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import DailyPlan from "./DailyPlan";
import Habit from "./Habit";
import HabitForm from "./HabitForm";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { dailyActions } from "../../redux/daily-slice";

const DailyTracker = () => {
  let habits = useAppSelector((state) => state.daily.userHabit);
  const dispatch = useAppDispatch();

  const getHabitPos = (id: number) =>
    habits.findIndex((habit) => habit.id === id);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    const originalPosition = getHabitPos(active.id);
    const newPosition = getHabitPos(over.id);
    habits = arrayMove(habits, originalPosition, newPosition);

    dispatch(dailyActions.setHabits(habits));

    return habits;
  };

  //Touch and keyboard controls
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <DndContext
            sensors={sensors}
            onDragEnd={handleDragEnd}
            collisionDetection={closestCorners}
          >
            <HabitForm />
            <Habit />
            <DailyPlan />
          </DndContext>
        </div>
      </div>
    </>
  );
};

export default DailyTracker;
