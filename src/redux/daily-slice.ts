import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserHabit {
  habitName: string;
  startTime: string;
  endTime: string;
}

interface DailyState {
  userHabit: UserHabit[];
  dailyPlan: UserHabit[][];
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
      }>
    ) => {
      state.userHabit.push({
        habitName: action.payload.habitName,
        startTime: action.payload.startTime,
        endTime: action.payload.endTime,
      });
    },

    createDailyPlan: (state, action: PayloadAction<UserHabit[]>) => {
      state.dailyPlan.pop();
      state.dailyPlan.push(action.payload);
    },
  },
});

export const dailyActions = dailySlice.actions;
export default dailySlice;
