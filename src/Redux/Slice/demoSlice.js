import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    demoValue: [],
    selectedadd: null,
    addCart: [],
    savecart: [],
    buynow: [],

};
export const demoSlice = createSlice({
    name: 'demo',
    initialState,
    reducers: {
        addressdemo: (state, action) => {
            state.demoValue = [...state.demoValue, action.payload]
        },
        selectedaddress: (state, action) => {
            state.selectedadd = action.payload
        },
        addToCart: (state, action) => {
            state.addCart = [...state.addCart, action.payload]
        },
        removecart: (state, action) => {
            state.addCart = action.payload
        },
        saveforlater: (state, action) => {
            state.savecart = [...state.savecart, action.payload]
        },
        removesavelater: (state, action) => {
            state.savecart = action.payload
        },
        buynowcart: (state, action) => {
            state.buynow = [...state.buynow, action.payload]
        },

    },
});
export const { addressdemo,
    selectedaddress,
    addToCart,
    removecart,
    saveforlater,
    removesavelater,
    buynowcart } = demoSlice.actions;

export default demoSlice.reducer;
