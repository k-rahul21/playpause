const videoReducer = (videoState, videoAction) => {
  console.log(videoAction);
  switch (videoAction.type) {
    case "FETCH_DATA":
      return {
        ...videoState,
        videoItems: [...videoState.videoItems, ...videoAction.payload],
      };
    default:
      return videoState;
  }
};

export { videoReducer };
