import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.products.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter(product => product.id!== action.payload);
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;