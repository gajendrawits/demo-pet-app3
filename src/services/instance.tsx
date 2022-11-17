import axios from "axios";

const api = axios.create({
  baseURL: "https://petstore.swagger.io/v2",
});

export default api;
