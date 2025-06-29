import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        cartData: []
    },
    reducers: {
        addCart(state, action) {
            state.cartData.push(action.payload)
        },
        deleteCart(state, action) {
            state.cartData = state.cartData.filter((item) => item.id !== action.payload);
        }

    },
});

export const { addCart, deleteCart } = userSlice.actions;
export default userSlice.reducer;