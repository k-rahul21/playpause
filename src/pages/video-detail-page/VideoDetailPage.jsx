import { React } from "react";
import { useParams } from "react-router-dom";
import { SinglePageCard } from "../../components/card/SinglePageCard";
import { useVideo } from "../../contexts/video-listing-context";

const VideoDetailPage = () => {
  const { videoId } = useParams();
  const {
    videoState: { videoItems },
  } = useVideo();

  function getVideoDetails(videos, videoId) {
    return videos.find((video) => video._id === videoId);
  }

  const video = getVideoDetails(videoItems, videoId);
  return <SinglePageCard {...video} />;
};

export { VideoDetailPage };
