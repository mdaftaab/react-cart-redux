import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: [],  // Change initialState to an empty array
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        removeFromCart: (state, action) => {
            return state.filter(product => product.id !== action.payload);
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;