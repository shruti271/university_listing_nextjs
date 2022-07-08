import { SET_EMAIL } from "../types";

export const setEmail = (email) => async (dispatch) => {
    dispatch({
        type: SET_EMAIL,
        payload: email,
    });
};
