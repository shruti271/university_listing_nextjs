import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
    name: "Email",
    initialState: {
        email: "2"
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        }
    }
});


export const { setEmail } = emailSlice.actions;


export default emailSlice.reducer;
