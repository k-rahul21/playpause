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
        <AuthProvider>
          <FilterProvider>
            <LikeProvider>
              <HistoryProvider>
                <WatchlaterProvider>
                  <App />
                </WatchlaterProvider>
              </HistoryProvider>
            </LikeProvider>
          </FilterProvider>
        </AuthProvider>
      </VideoProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
