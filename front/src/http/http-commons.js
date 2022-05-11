import Axios from "axios";

const HTTP = Axios.create({
  baseURL: "http://localhost:3030/"
});

HTTP.interceptors.request.use(config => {
  config.headers["Content-Type"] = "application/json";
  // Authentication token
  config.headers["Authorization"] = "Bearer " + localStorage.getItem("access_token");
  return config;
});

HTTP.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

export { HTTP };
