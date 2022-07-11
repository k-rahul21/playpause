import { createContext, useContext, useReducer } from "react";
import { historyReducer } from "../reducers/index";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const [historyState, historyDispatch] = useReducer(historyReducer, {
    historyItems: [],
  });
  return (
    <HistoryContext.Provider
      value={{ historyState, historyDispatch }}
    ></HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);
export { useHistory, HistoryProvider };
