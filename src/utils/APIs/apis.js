import axiosClient from "./axiosClient";

export const getTesters = () => {
  return axiosClient.get("/testers/view/");
};

export const getTrucks = () => {
  return axiosClient.get("/trucks/view/");
};

export const getActions = () => {
  return axiosClient.get("/mover/actions/view/");
};

export const getTrailerDolly = () => {
  return axiosClient.get("/trailerDolly/view/");
};

export const getTrailerDollyActions = () => {
  return axiosClient.get("/trailer/actions/view/");
};
