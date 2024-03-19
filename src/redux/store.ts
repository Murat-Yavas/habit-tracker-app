import { configureStore } from "@reduxjs/toolkit";
import dailySlice from "./daily-slice";
import quotesSlice from "./quotes-slice";
import userSlice from "./user-slice";

export const store = configureStore({
  reducer: {
    daily: dailySlice.reducer,
    quotes: quotesSlice.reducer,
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
