import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlise = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.cart.find((item) => item.id === action.payload.id);
      if (product) {
        product.qty++;
      } else {
        state.cart.push(action.payload);
      }
    },
    changeQty: (state, action) => {
      const product = state.cart.find((item) => item.id === action.payload.id);
      if (product) {
        product.qty = action.payload.qty;
      }
    },
    updateCart:(state,action)=>{
      const product = state.cart.find((item)=>item.id===action.payload.id)
      if(product){
        if(action.payload.type === 'increment') {
          product.qty++
        }else if(action.payload.type === 'decrement'){
          if(product.qty > 1) product.qty--
        }else {
          const updateCart = state.cart.filter((item) => item.id !== action.payload.id)
          state.cart = updateCart;
        }
      }
    },
    resetCart: (state) => {
      state.cart = [];
    },

  },
});

export const Cart = cartSlise.reducer;
export const CartActions = cartSlise.actions;
