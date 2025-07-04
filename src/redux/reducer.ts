import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        cartData: [],
        homeData:[],
        homeBanner:[]
    },
    reducers: {
        homeData(state,action){
            state.homeData=action.payload
        },
        homeBanner(state,action){
            state.homeBanner=action.payload
        },
        addCart(state, action) {
            state.cartData.push(action.payload)
        },
        deleteCart(state, action) {
            state.cartData = state.cartData.filter((item) => item.id !== action.payload);
        }

    },
});

export const { homeData,homeBanner,addCart, deleteCart } = userSlice.actions;
export default userSlice.reducer;