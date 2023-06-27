
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems:[] 
    },
    reducers:{
        addToCart:(state,action) => {
            state.cartItems.push(action.payload)
        },
        reset:(state,action) => {
            state.cartItems = []
        }
    }
})

export const {addToCart,reset} = cartSlice.actions 
export default cartSlice.reducer