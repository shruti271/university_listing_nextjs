import { GET_SAMPLE, SAMPLE_ERROR } from "../types";

export const getSampleData = (a) => async (dispatch) => {
    console.log("....",a)
    try {
        dispatch({
            type: GET_SAMPLE,
            payload: a,
        });
    } catch (error) {
        dispatch({
            type: SAMPLE_ERROR,
            payload: "error message",
        });
    }
};
