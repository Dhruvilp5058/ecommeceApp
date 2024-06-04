import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: [],
  cartvalue: [],
  buyvalue: [],
  profile: [],
  favscreen:[],
  notification:[]
};
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    savecart: (state, action) => {
      if (action.payload === null) {
        state.value = [];
      } else {
        state.value.push(action.payload);
      }
    },
    cartData: (state, action) => {
      state.value=action.payload
    },
    removecart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.value = state.value.filter(item => item.id !== itemIdToRemove);
    },
    favscreendata: (state, action) => {
      if (action.payload === null) {
        state.favscreen = [];
      } else {
        state.favscreen.push(action.payload);
      }
    },
    removecartfav: (state, action) => {
      const itemIdToRemove = action.payload;
      state.favscreen = state.favscreen.filter(item => item.id !== itemIdToRemove);
    },
  
    maincart: (state, action) => { 
      state.cartvalue =[...state.cartvalue,action.payload] 
    },
    profiledata: (state, action) => { 
      state.profile =action.payload
    },
    notificationdata: (state, action) => { 
      state.notification =action.payload
    },     
  },
});
export const {savecart, removecart, maincart,cartData,profiledata,favscreendata,removecartfav,notificationdata
  } = counterSlice.actions;

export default counterSlice.reducer;
