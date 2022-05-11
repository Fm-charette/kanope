import { HTTP } from "../http-commons";

export default {
  register: data => {
    return HTTP.post("/users", data);
  },
  login: data => {
    return HTTP.post("/authentication", data);
  }
};
