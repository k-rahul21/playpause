import axios from "axios";

const signUpAPI = (user) => {
  return axios.post("/api/auth/signup", user);
};

const loginAPI = (user) => {
  console.log("API console", user);
  return axios.post("/api/auth/login", user);
};

export { signUpAPI, loginAPI };
