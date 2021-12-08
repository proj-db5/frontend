import axios from "axios";

const client = axios.create({
  baseURL: API_DOMAIN,
  // headers: {
  //   Credential: "include",
  // },
  withCredentials: true,
});

export default client;
