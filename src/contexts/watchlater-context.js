import { createContext, useContext, useReducer } from "react";
import { watchlaterReducer } from "../reducers/index";

const WatchlaterContext = createContext();

const WatchlaterProvider = ({ children }) => {
  const [watchlaterState, watchlaterDispatch] = useReducer(watchlaterReducer, {
    watchlaterItems: [],
  });
  return (
    <WatchlaterContext.Provider value={{ watchlaterState, watchlaterDispatch }}>
      {children}
    </WatchlaterContext.Provider>
  );
};

const useWatchlater = () => useContext(WatchlaterContext);

export { useWatchlater, WatchlaterProvider };
