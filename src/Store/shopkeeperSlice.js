import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shops: [
    { storeName: "Fresh Farm Mart", location: "Downtown", products: [{ name: "Tomatoes", quantity: 50, price: 30 }] },
    { storeName: "Green Harvest", location: "Main Street", products: [{ name: "Potatoes", quantity: 70, price: 25 }] }
  ]
};

export const shopkeeperSlice = createSlice({
  name: "shopkeeper",
  initialState,
  reducers: {
    addShop: (state, action) => {
      state.shops.push(action.payload);
    },
    removeShop: (state, action) => {
      state.shops = state.shops.filter(shop => shop.storeName !== action.payload.storeName);
    },
    updateShop: (state, action) => {
      const index = state.shops.findIndex(shop => shop.storeName === action.payload.storeName);
      if (index !== -1) {
        state.shops[index] = { ...state.shops[index], ...action.payload };
      }
    }
  }
});

export const { addShop, removeShop, updateShop } = shopkeeperSlice.actions;
export default shopkeeperSlice.reducer;
