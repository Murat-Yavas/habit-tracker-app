import { configureStore } from "@reduxjs/toolkit";
import dailySlice from "./daily-slice";
import quotesSlice from "./quotes-slice";

export const store = configureStore({
  reducer: { daily: dailySlice.reducer, quotes: quotesSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
