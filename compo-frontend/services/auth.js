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
