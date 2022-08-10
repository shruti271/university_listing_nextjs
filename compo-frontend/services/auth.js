import axios from "axios";
import appConfig from "../config/index";

export const signIn = (payload) => {
  return axios.post(`${appConfig.appUrl}/auth/signin/student/`, payload);
};

export const signUp = (payload) => {
  return axios.post(`${appConfig.appUrl}/auth/signup/student/`, payload);
};
export const onBoarding = (payload) => {
  return axios.put(`${appConfig.appUrl}/auth/signup/student/`, payload);
};

export const Activation = (payload) => {
  return axios.post(`${appConfig.appUrl}/auth/activate/student/`, payload);
};

export const ResendActivation = (payload) => {
  return axios.post(`${appConfig.appUrl}/auth/send/activate/student/`, payload);
};

export const ResetPassword = (payload) => {
  return axios.post(`${appConfig.appUrl}/auth/send/reset-password/`, payload);
};

export const UpdatePasswords = (payload) => {
  return axios.post(`${appConfig.appUrl}/auth/reset-password/`, payload);
};
