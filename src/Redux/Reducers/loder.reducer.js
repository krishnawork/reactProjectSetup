const { ACTION_TYPES } = require("Redux/Actions/auth.action");

export default (Loadershow = false, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOADER_UPDATE:
      return action.payload.LoaderType;
    default:
      return Loadershow;
  }
};
