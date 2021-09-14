export const ACTION_TYPES = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  LOADER_UPDATE: "LOADER_UPDATE",
};

export const login = (data) => {
  localStorage.setItem("isLoggedIn", true);
  return {
    type: ACTION_TYPES.LOGIN,
    ...data,
  };
};

export const logout = () => {
  localStorage.clear();
  return {
    type: ACTION_TYPES.LOGOUT,
  };
};

export const LoaderUpdate = (value) => {
  return {
    type: ACTION_TYPES.LOADER_UPDATE,
    payload: {
      LoaderType: value,
    },
  };
};
