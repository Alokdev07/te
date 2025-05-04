import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cropData: [
    { crop: "Wheat", data: [{ month: "Jan", quantity: 50 }, { month: "Feb", quantity: 70 }] },
    { crop: "Rice", data: [{ month: "Jan", quantity: 60 }, { month: "Feb", quantity: 80 }] }
  ]
};

export const farmerGraphSlice = createSlice({
  name: "farmerGraph",
  initialState,
  reducers: {
    updateGraph: (state, action) => {
      const cropIndex = state.cropData.findIndex(crop => crop.crop === action.payload.crop);
      if (cropIndex !== -1) {
        state.cropData[cropIndex].data = action.payload.data;
      }
    },
    addNewCropGraph: (state, action) => {
      state.cropData.push(action.payload);
    }
  }
});

export const { updateGraph, addNewCropGraph } = farmerGraphSlice.actions;
export default farmerGraphSlice.reducer;
