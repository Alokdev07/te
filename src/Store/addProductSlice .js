import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
};

export const addProductSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.name !== action.payload.name);
    }
  }
});

export const { addProduct, removeProduct } = addProductSlice.actions;
export default addProductSlice.reducer;
