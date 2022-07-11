import { createContext, useContext, useEffect, useReducer } from "react";
import { videoReducer } from "../reducers/index";
import axios from "axios";

const VideoContext = createContext(null);

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, {
    videoItems: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const videoData = await axios.get("/api/videos");
      console.log(videoData);
      videoDispatch({ type: "FETCH_DATA", payload: videoData.data.videos });
    };
    fetchData();
  }, []);

  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
