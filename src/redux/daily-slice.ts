import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { days } from "../helpers/Constants";

export interface UserHabit {
  day: string;
  habitName: string;
  startTime: string;
  endTime: string;
  id: number;
  habitsOfDay?: string[];
  habitsStartTime: string[];
  habitsEndTime: string[];
  dayId: number;
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
      }>
    ) => {
      let day = state.userHabit.find(
        (habit) => habit.day === action.payload.day
      );
      if (!day) {
        state.userHabit.push({
          day: action.payload.day,
          habitName: action.payload.habitName,
          startTime: action.payload.startTime,
          endTime: action.payload.endTime,
          id: state.userHabit.length,
          habitsOfDay: [action.payload.habitName],
          habitsStartTime: [action.payload.startTime],
          habitsEndTime: [action.payload.endTime],
          dayId: days.indexOf(action.payload.day),
        });
        state.userHabit.sort((a, b) => (a.dayId > b.dayId ? 1 : -1));
      } else {
        day.habitsOfDay?.push(action.payload.habitName);
        day.habitsStartTime.push(action.payload.startTime);
        day.habitsEndTime.push(action.payload.endTime);
      }
    },

    // setHabits: (state, action: PayloadAction<UserHabit[]>) => {
    //   state.userHabit = action.payload;
    // },

    deleteHabit: (state, action: PayloadAction<number>) => {
      const newHabits = state.userHabit.filter(
        (habit) => habit.id !== action.payload
      );
      state.userHabit = newHabits;
    },

    // createDailyPlan: (state, action: PayloadAction<UserHabit[]>) => {
    //   state.dailyPlan = action.payload;
    // },
  },
});

export const dailyActions = dailySlice.actions;
export default dailySlice;

// action.payload.startTime,
// action.payload.endTime,
