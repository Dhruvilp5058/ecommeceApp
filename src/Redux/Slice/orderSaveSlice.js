import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    orderValue: [],
    googleauth:null,

};
export const orderSaveSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        ordercart: (state, action) => {
            state.orderValue = [...state.orderValue, action.payload]
        },
        google: (state, action) => {
            state.googleauth = action.payload
        },
    
    },
});
export const {google,ordercart } = orderSaveSlice.actions;

export default orderSaveSlice.reducer;
