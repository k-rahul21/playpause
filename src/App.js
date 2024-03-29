import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Login } from "./pages/authentication/login";
import { Signup } from "./pages/authentication/signup";
import { HistoryPage } from "./pages/history-page/HistoryPage";
import { Home } from "./pages/home/Home";
import { LikePage } from "./pages/like-page/LikePage";
import { VideoDetailPage } from "./pages/video-detail-page/VideoDetailPage";
import { WatchlaterPage } from "./pages/watchlater-page/WatchlaterPage";
import { PrivateRoute } from "./components/private/private";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Open Routes */}
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/video/:videoId" exact element={<VideoDetailPage />} />

        {/* Private Routes */}
        <Route element={<PrivateRoute />} />
        <Route path="/liked" element={<LikePage />} />
        <Route path="/history" exact element={<HistoryPage />} />
        <Route path="/watchlater" exact element={<WatchlaterPage />} />
      </Routes>
      {/* <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </>
  );
}

export default App;
