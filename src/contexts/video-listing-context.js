import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const VideoContext = createContext({});

const VideoProvider = ({ children }) => {
  const [availableVideos, setAvailableVideos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const productsData = await axios.get("/api/videos");
        if (productsData.status === 200) {
          setAvailableVideos(productsData.data.videos);
        }
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  console.log(availableVideos);

  return (
    <VideoContext.Provider value={{ availableVideos, setAvailableVideos }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
