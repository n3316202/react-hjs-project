import axios from "axios";

export default axios.create({
  baseURL: "http://49.247.158.208:9999/hjs",
  headers: {
    "Content-type": "application/json"
  }
});