import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loader:false
}

const loaderSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {
        start: (state) => {
            state.loader = true;
        },
        stop: (state) => {
            state.loader = false;
        }
    }
})

export const Loader = loaderSlice.reducer;
export const LoaderActions = loaderSlice.actions;