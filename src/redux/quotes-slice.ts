import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Quote {
  text: string;
  author: string;
}

interface QuotesState {
  quotes: Quote[];
}

const initialState: QuotesState = { quotes: [] };

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    fetchQuotes: (state, action: PayloadAction<Quote[]>) => {
      state.quotes = action.payload;
    },
  },
});

export const quotesActions = quotesSlice.actions;
export default quotesSlice;
