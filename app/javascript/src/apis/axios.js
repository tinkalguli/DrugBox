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

export { setAuthHeaders, resetAuthTokens };