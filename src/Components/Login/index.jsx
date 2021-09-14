import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import Api from "Helpers/Api";
import { login } from "Redux/Actions/auth.action";
import moment from "moment";
import { showLoading, hideLoading, LoadingBar } from "react-redux-loading-bar";
import Axios from "axios";

const loginStart = () => ({
  type: "FETCH_LOGIN_REQUEST",
  time: Date.now(),
});

const loginSuccess = () => ({
  type: "FETCH_LOGIN_SUCCESS",
  time: Date.now(),
});

const setAuthorized = (authorized) => ({
  type: "SET_AUTHORIZED",
  payload: {
    authorized,
  },
});

const Login = (props) => {
  const dispatch = useDispatch();
  const main = useSelector((state) => state.main);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const pushToken = main.pushToken;
    console.log("pushToken", pushToken);
    dispatch(showLoading());
    dispatch(loginStart());
    Api.login(email, password)
      .then(async (credentials) => {
        if (credentials.status === 200) {
          const { access_token, refresh_token } = credentials.data.auth;
          const getExpirationDate = moment().add(
            credentials.data.auth.expires_in,
            "seconds"
          );
          dispatch(loginSuccess());
          dispatch(setAuthorized(true));
          // Axios.get("https://developer-api.seemelissa.com/v1/users/me")
          //   .then((res) => {
          //     console.log("profile response", res);
          //   })
          //   .catch((err) => console.log("profile err", err));
        }
      })
      .then(() => {});
  };

  return (
    <div className="page-header">
      <LoadingBar />
      <input
        type="text"
        name=""
        id=""
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="email"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default connect(null, { login })(withRouter(Login));
