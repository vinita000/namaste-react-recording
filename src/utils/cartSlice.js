import { createSlice } from "@reduxjs/toolkit";

const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: cartItems
  },
  reducers: {
    addItem: (state, action) => { // state - initial state, action - data which is coming in
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  }, 
});

export const { addItem, removeItem, clearCart } =  cartSlice.actions;
export default cartSlice.reducer; //export reducer --- > why reducer not reducers because it will combile all reducers and make one reducer

// addItem - action
// () => {

//} - reducer function
//mapping between reducer and action

//Behind the scence how reducer seen
// cartSlice = {
//   actions: {
//     addItem,
//     removeItem, 
//     clearCart
//   },
//   reducer: reducers
// }

// we subscribe to a store using useSelector