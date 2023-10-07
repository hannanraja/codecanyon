import axios from "axios";
var token:any;
export const apiCall = (method:string, url:string, body:any, attachHeader:boolean) => {
  token = localStorage.getItem("token");
  if (method === "get") {
    attachHeader && attachTokenToHeader(url)
    return axios.get(url);
  } else if (method === "post") {
    if (attachHeader) {
      attachTokenToHeader(url);
      if (axios.defaults.headers.common["Authorization"]) {
        return axios.post(url, body);
      } else {
        attachTokenToHeader(url);
      }
    } else {
      return axios.post(url, body);
    }
  } else if (method === "put") {
    // attachTokenToHeader(url)
    return axios.put(url, body);
  } else {
    // attachTokenToHeader(url)
    return axios.delete(url);
  }
};
function attachTokenToHeader(url:string) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
}
