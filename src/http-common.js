import axios from "axios";

export default axios.create({
//  baseURL: "http://localhost:8080/api",
  baseURL: "https://djangotest-12-07-21.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});

