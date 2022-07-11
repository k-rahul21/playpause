const watchlaterReducer = (watchlaterState, watchlaterAction) => {
  switch (watchlaterAction.type) {
    case "ADD_TO_WATCHLATER":
      return {
        ...watchlaterState,
        watchlaterItems: [
          ...watchlaterState.watchlaterItems,
          watchlaterAction.payload,
        ],
      };
    case "REMOVE_FROM_WATCHLATER":
      return {
        ...watchlaterState,
        watchlaterItems: watchlaterState.watchlaterItems.filter(
          (item) => item._id !== watchlaterAction.payload
        ),
      };
    default:
      return watchlaterState;
  }
};

export { watchlaterReducer };
