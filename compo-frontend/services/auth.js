import axios from "axios";
import appConfig from "../config/index";



export const signIn = async (payload) => {
    let result = {};
    try {
        const res = await axios.post(`${appConfig.appUrl}/auth/signin/student/`, payload);
        result = res.data || {};
        return { success: true, data: result };
    } catch (err) {
        return {
            success: false,
            message: err || "something went wrong",
        };
    }
};



export const signUp = async (payload) => {
    let result = {};
    try {
        const res = await axios.post(`${appConfig.appUrl}/auth/signup/student/`, payload);
        result = res.data || {};
        return { success: true, data: result };
    } catch (err) {
        return {
            success: false,
            message: err || "something went wrong",
        };
    }
};
export const onBoarding = async (payload) => {
    let result = {};
    try {
        const res = await axios.put(`${appConfig.appUrl}/auth/signup/student/`, payload);
        result = res.data || {};
        return { success: true, data: result };
    } catch (err) {
        return {
            success: false,
            message: err || "something went wrong",
        };
    }
};
