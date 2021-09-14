// import { CLIENT_SECRET, CLIENT_ID }
import React from "react";
import * as handler from "./handler";
import { PATH_LOGIN } from "./path";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { useDispatch, useSelector } from "react-redux";
import { CLIENT_ID, CLIENT_SECRET } from "Configs";

const login = async (username, password) => {
  let response = await handler.post(PATH_LOGIN, {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    username,
    password,
  });
  return response;
};

export default {
  login,
};
