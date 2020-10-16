import axios from "axios";

const instance = axios.create({
  baseURL: "Paste your backend URL example(http://localhost:3000/)",
});

export default instance;
