import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burguer-app.firebaseio.com/"
});

export default instance;
