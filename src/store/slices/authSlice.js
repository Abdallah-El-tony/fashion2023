import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth:JSON.parse(localStorage.getItem("isAuth")) || false,
    userId:JSON.parse(localStorage.getItem("userId")) || 1,
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        signUp:(state,action)=>{
            state.isAuth = true
            state.users = action.payload
            localStorage.setItem("isAuth",JSON.stringify(state.isAuth))
        },
        signIn:(state,action)=> {
            state.isAuth = true
            state.userId = action.payload
            localStorage.setItem("userId",JSON.stringify(state.userId))
            localStorage.setItem("isAuth",JSON.stringify(state.isAuth))
        },
        logOut:(state)=>{
            state.isAuth = false
            localStorage.setItem("isAuth",JSON.stringify(state.isAuth))
        }
   
    }
})
export const AuthReducer = authSlice.reducer;
export const AuthActions = authSlice.actions;