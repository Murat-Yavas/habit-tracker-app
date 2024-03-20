import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { days } from "../helpers/Constants";

export interface UserHabit {
  day: string;
  habitName?: string;
  startTime?: string;
  endTime?: string;
  id?: number;
  habitsOfDay?: string[];
  habitsStartTime: string[];
  habitsEndTime: string[];
  dayId: number;
  habitInfo: { id: number; name: string; startTime: string; endTime: string }[];
}

interface DailyState {
  userHabit: UserHabit[];
  dailyPlan: UserHabit[];
}

const initialState: DailyState = { userHabit: [], dailyPlan: [] };

const dailySlice = createSlice({
  name: "daily",
  initialState,
  reducers: {
    addHabit: (
      state,
      action: PayloadAction<{
        habitName: string;
        startTime: string;
        endTime: string;
        day: string;
        habitId: number;
      }>
    ) => {
      let day = state.userHabit.find(
        (habit) => habit.day === action.payload.day
      );
      if (!day) {
        state.userHabit.push({
          day: action.payload.day,
          habitsOfDay: [action.payload.habitName],
          habitsStartTime: [action.payload.startTime],
          habitsEndTime: [action.payload.endTime],
          dayId: days.indexOf(action.payload.day),
          habitInfo: [
            {
              id: action.payload.habitId,
              name: action.payload.habitName,
              startTime: action.payload.startTime,
              endTime: action.payload.endTime,
            },
          ],
        });
        state.userHabit.sort((a, b) => (a.dayId > b.dayId ? 1 : -1));
      } else {
        day.habitsOfDay?.push(action.payload.habitName);
        day.habitsStartTime.push(action.payload.startTime);
        day.habitsEndTime.push(action.payload.endTime);
        day.habitInfo.push({
          id: action.payload.habitId,
          name: action.payload.habitName,
          startTime: action.payload.startTime,
          endTime: action.payload.endTime,
        });
      }
    },

    deleteHabit: (
      state,
      action: PayloadAction<{
        id: number;
        dayName: string;
        temp: {
          id: number;
          name: string;
          startTime: string;
          endTime: string;
        }[];
      }>
    ) => {
      let day = state.userHabit.find(
        (habit) => habit.day === action.payload.dayName
      );
      if (!day) {
        state.userHabit = [];
      } else {
        [...state.userHabit];
        day.habitInfo = action.payload.temp;
      }
    },
  },
});

export const dailyActions = dailySlice.actions;
export default dailySlice;
