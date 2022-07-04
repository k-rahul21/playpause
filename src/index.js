import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { VideoProvider } from "./contexts/video-listing-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VideoProvider>
        <App />
      </VideoProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
