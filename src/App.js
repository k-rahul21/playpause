import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { HistoryPage } from "./pages/history-page/HistoryPage";
import { Home } from "./pages/home/Home";
import { LikePage } from "./pages/like-page/LikePage";
import { VideoDetailPage } from "./pages/video-detail-page/VideoDetailPage";
import { WatchlaterPage } from "./pages/watchlater-page/WatchlaterPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/liked" element={<LikePage />} />
        <Route path="/history" exact element={<HistoryPage />} />
        <Route path="/watchlater" exact element={<WatchlaterPage />} />
        <Route path="/video/:videoId" exact element={<VideoDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
