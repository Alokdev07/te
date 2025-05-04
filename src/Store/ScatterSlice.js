import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   data :  [
    { x: 300, y: 400 },
    { x: 320, y: 500 },
    { x: 340, y: 450 },
    { x: 360, y: 600 },
    { x: 380, y: 550 },
    { x: 400, y: 700 },
    { x: 310, y: 420 },
    { x: 330, y: 460 },
    { x: 350, y: 620 },
    { x: 370, y: 580 },
  ]
};

export const ScatterSlice = createSlice({
  name: "Scatter",
  initialState,
  reducers: {
    addData: (state, action) => {
       const data = {
        
            x : action.payload.x,
            y : action.payload.y
       }
       state.data.push(data)
    },
    deleteData: (state, action) => {
      state.data = state.data.filter((data) => data.x !== action.data.x);
    }
  }
});

export const { addData, deleteData } = ScatterSlice.actions;
export default ScatterSlice.reducer;
