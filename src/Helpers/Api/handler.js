import axios from "axios";
import { API_BASE_URL, API_VERSION } from "../../Configs";
import { logout } from "../../Redux/Actions/auth.action";
import Swal from "sweetalert2";

axios.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    const { response } = error;
    if (response && response.status === 401) {
      logout();
      window.location.href = "/login";
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    return Promise.reject(error);
  }
);

export const post = async (url, payload, config = {}) => {
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Response": "Advanced",
    },
  };
  try {
    const result = await axios.post(
      API_BASE_URL + API_VERSION + url,
      payload,
      axiosConfig
    );
    return result;
  } catch (error) {
    return error;
  }
};

export const handleError = (error) => {
  const { response } = error;
  if (response) {
    if (response.status === 500 || response.data.errors)
      Swal.fire({
        icon: "error",
        title: "Internal server Error, please contact your administrator",
      });
    else if (response.data && response.data.message)
      Swal.fire({
        icon: "error",
        title: response.data.message,
      });
    else if (
      response.data &&
      response.data.errors &&
      response.data.errors.length > 0
    )
      Swal.fire({
        icon: "error",
        title: response.data.errors[0].description,
      });
  }
  throw error;
};
