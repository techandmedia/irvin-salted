import axios from "axios";

export function getProducts(URL) {
  return axios.get(URL);
}

export function getDummy() {
  const dummy = "./DummyData.json";
  return axios.get(dummy);
}
