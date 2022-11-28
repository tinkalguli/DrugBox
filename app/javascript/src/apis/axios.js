import axios from "axios";
import { getFromLocalStorage } from "utils/storage";

axios.defaults.baseURL = "/";

const setAuthHeaders = (authToken = "") => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": document
      .querySelector('[name="csrf-token"]')
      .getAttribute("content"),
  };
  const token = authToken || getFromLocalStorage("authToken");

  if (token) axios.defaults.headers["Authorization"] = token;
};

const resetAuthTokens = () => {
  delete axios.defaults.headers["Authorization"];
};

const handleSuccessResponse = response => {
  if (response) {
    response.success = response.status === 200;
    if (response.data.notice) {
      Toastr.success(response.data.notice);
    }
  }

  return response;
};

const handleErrorResponse = (error, authDispatch) => {
  if (error.response?.status === 401) {
    authDispatch({ type: "LOGOUT" });
    Toastr.error(error.response?.data?.error);
  } else {
    Toastr.error(error.response?.data?.error || error.message);
  }

  return Promise.reject(error);
};

const registerIntercepts = authDispatch => {
  axios.interceptors.response.use(handleSuccessResponse, error =>
    handleErrorResponse(error, authDispatch)
  );
};

export { setAuthHeaders, resetAuthTokens, registerIntercepts };