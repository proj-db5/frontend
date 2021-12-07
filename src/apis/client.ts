import axios from "axios";

const client = axios.create({
  baseURL: API_DOMAIN,
});

export default client;
