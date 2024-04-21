import axios from "axios";
import { LoginFormInput } from "../models/login";
import { toast } from "react-toastify";

const HOST_URL = "http://localhost:3000/api/v1";
const api = axios.create({
  baseURL: HOST_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

const getURL = (path: string) => `${HOST_URL}${path}`;

export const getUserInfo = (params = {}) => {
  return api.get(getURL("/auth/userinfo"), { params });
};

export const login = (data: LoginFormInput, cb: () => void) => {
  return api
    .post(getURL("/auth/login"), data)
    .then(({ data }) => {
      console.log(data);
      toast("Sucessfully logged in !");
      cb();
    })
    .catch((err) => {
      console.log(err);
      toast((err && err.response && err.response.data.message) || "Login Failed !");
    });
};
