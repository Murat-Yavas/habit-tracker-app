import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { days } from "../helpers/Constants";

export interface DailyPlan {
  day: string;
  habitName?: string;
  startTime?: string;
  endTime?: string;
  id?: number;
  habitsOfDay?: string[];
  habitsStartTime?: string[];
  habitsEndTime?: string[];
  dayId: number;
  habitInfo: { id: number; name: string; startTime: string; endTime: string }[];
}

interface DailyState {
  dailyPlan: DailyPlan[];
}

const initialState: DailyState = { dailyPlan: [] };

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
      let day = state.dailyPlan.find(
        (habit) => habit.day === action.payload.day
      );
      if (!day) {
        state.dailyPlan.push({
          day: action.payload.day,
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
        state.dailyPlan.sort((a, b) => (a.dayId > b.dayId ? 1 : -1));
      } else {
        day.habitInfo.push({
          id: action.payload.habitId,
          name: action.payload.habitName,
          startTime: action.payload.startTime,
          endTime: action.payload.endTime,
        });
      }
      state.dailyPlan.map((daily) =>
        daily.habitInfo.sort((a, b) =>
          +a.startTime.slice(0, 2) > +b.startTime.slice(0, 2) ? 1 : -1
        )
      );
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
      let dayItem = state.dailyPlan.find(
        (habit) => habit.day === action.payload.dayName
      );
      if (!dayItem) {
        state.dailyPlan = [];
      } else {
        dayItem.habitInfo = action.payload.temp;
      }
    },

    updateDailyPlan: (state, action: PayloadAction<DailyPlan[]>) => {
      // state.dailyPlan = [];
      state.dailyPlan = action.payload;
    },
  },
});

export const dailyActions = dailySlice.actions;
export default dailySlice;
