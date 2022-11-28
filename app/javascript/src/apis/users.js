import axios from "axios";
import { USER_URL } from "./urls";

const currentUser = () => axios.get(`${USER_URL}`);

const invite = payload => axios.post(`${USER_URL}/invite`, payload);

const usersApi = {
  invite,
  currentUser,
};

export default usersApi;