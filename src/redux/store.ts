import { configureStore } from "@reduxjs/toolkit";
import dailySlice from "./daily-slice";

export const store = configureStore({
  reducer: { daily: dailySlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
