import { ACTION_TYPES } from "../Actions/auth.action";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        isLoggedIn: true,
      };
    case ACTION_TYPES.LOGOUT:
      return {
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
