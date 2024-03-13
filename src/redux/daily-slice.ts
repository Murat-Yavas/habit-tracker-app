import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserHabit {
  habitName: string;
  startTime: string;
  endTime: string;
}

interface DailyState {
  userHabit: UserHabit[];
}

const initialState: DailyState = { userHabit: [] };

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
  },
});

export const dailyActions = dailySlice.actions;
export default dailySlice;
