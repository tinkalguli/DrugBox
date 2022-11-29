import axios from "axios";
import { USERS_URL } from "./urls";

const login = payload => axios.post(`${USERS_URL}/login`, payload);

const signup = payload => axios.post(`${USERS_URL}`, payload);

const logout = () => axios.delete(`${USERS_URL}/logout`);

const authApi = {
  signup,
  login,
  logout,
};

export default authApi;