import { React } from "react";
import { useParams } from "react-router-dom";
import { SinglePageCard } from "../../components/card/SinglePageCard";
import { useVideo } from "../../contexts/video-listing-context";

const VideoDetailPage = () => {
  const { videoId } = useParams();
  const { availableVideos } = useVideo();

  function getVideoDetails(videos, videoId) {
    return videos.find((video) => video._id === videoId);
  }

  const video = getVideoDetails(availableVideos, videoId);
  console.log(video);
  return <SinglePageCard {...video} />;
};

export { VideoDetailPage };
