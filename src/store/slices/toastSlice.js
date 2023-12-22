/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    toast_status:false,
    type:'',
    toast_name:'Cart'
}
const toastSlice = createSlice({
    name:'Toast',
    initialState,
    reducers:{
        showSucessMessag:(state,action)=>{
            state.toast_status = true
            state.type = 'success'
            state.toast_name = action.payload
        },
        showWarningMessage:(state)=>{
            state.toast_status = true
            state.type = 'warning'
        },
        showErrorMessage:(state,action)=>{
            state.toast_status = true
            state.type = 'Error'
            state.toast_name = action.payload
        },
        hideToast:(state)=>{
            state.toast_status = false
        }
    }
})
export const ToastReducer = toastSlice.reducer;
export const ToastAction = toastSlice.actions