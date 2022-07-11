import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import {
  VideoProvider,
  AuthProvider,
  FilterProvider,
  LikeProvider,
  HistoryProvider,
  WatchlaterProvider,
} from "./contexts/index";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VideoProvider>
        <FilterProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </FilterProvider>
      </VideoProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
