import { quotesActions } from "../quotes-slice";

export const getQuotes = async (dispatch: any) => {
  const response = await fetch("https://type.fit/api/quotes");
  const data = await response.json();
  dispatch(quotesActions.fetchQuotes(data));
};
