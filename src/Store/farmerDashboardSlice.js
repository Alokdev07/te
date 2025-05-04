import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  crops : [
    { name: "Tomatoes", quantity: "50 kg", price: "$30", stock: "Available" },
    { name: "Wheat", quantity: "100 kg", price: "$40", stock: "Out of Stock" },
    { name: "Potatoes", quantity: "70 kg", price: "$25", stock: "Available" }
  ]
};

export const farmerDashboardSlice = createSlice({
  name: "farmerDashboard",
  initialState,
  reducers: {
    addCrop: (state, action) => {
      state.crops.push(action.payload);
    },
    removeCrop: (state, action) => {
      state.crops = state.crops.filter(crop => crop.name !== action.payload.name);
    },
    updateCrop: (state, action) => {
      const index = state.crops.findIndex(crop => crop.name === action.payload.name);
      if (index !== -1) {
        state.crops[index] = { ...state.crops[index], ...action.payload };
      }
    }
  }
});

export const { addCrop, removeCrop, updateCrop } = farmerDashboardSlice.actions;
export default farmerDashboardSlice.reducer;
