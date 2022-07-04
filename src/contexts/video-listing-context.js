import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const VideoContext = createContext({});

const VideoProvider = ({ children }) => {
  const [availableVideos, setAvailableVideos] = useState([]);

  const getVideos = async () => {
    try {
      const productsData = await axios.get("/api/categories");
      console.log(productsData);
      if (productsData.status === 200)
        setAvailableVideos(productsData.data.categories);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <VideoContext.Provider value={{ availableVideos, setAvailableVideos }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
