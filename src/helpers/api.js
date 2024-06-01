import axios from "axios";
export const api = axios.create({
    // baseURL: "https://moviesapi.ir/api/v1/",
    baseURL:"https://moviesapi.codingfront.dev/",
   
  });
  export default api;