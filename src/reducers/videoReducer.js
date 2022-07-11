const videoReducer = (videoState, videoAction) => {
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
