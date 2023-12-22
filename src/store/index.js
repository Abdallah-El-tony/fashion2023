import { configureStore } from "@reduxjs/toolkit";
import { ToastReducer } from "./slices/toastSlice";
import { AuthReducer } from "./slices/authSlice";
import { Cart } from "./slices/cartSlice";
import { Loader } from "./slices/loaderSlice";

export const store = configureStore({
    reducer:{
        ToastReducer,
        AuthReducer,
        Cart,
        Loader
    }
    
})