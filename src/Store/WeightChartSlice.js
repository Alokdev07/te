import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   data :[
  { x: 0, y1: 300, y2: 320, y3: 310 },
  { x: 30, y1: 340, y2: 330, y3: 350 },
  { x: 60, y1: 360, y2: 340, y3: 370 },
  { x: 90, y1: 400, y2: 390, y3: 420 },
  { x: 120, y1: 450, y2: 440, y3: 460 },
  { x: 150, y1: 500, y2: 490, y3: 510 },
  { x: 180, y1: 550, y2: 530, y3: 560 },
  ]
};

export const WeightChartSlice = createSlice({
  name: "WeightChart",
  initialState,
  reducers: {
    addData: (state, action) => {
       const data = {
           x : action.payload.gain,
            y1 : action.payload.y1,
            y2 : action.payload.y2,
            y3 : action.payload.y3,
       }
       state.data.push(data)
    },
    deleteData: (state, action) => {
      state.data = state.data.filter((data) => data.x !== action.payload.x);
    }
  }
});

export const { addData, deleteData } = WeightChartSlice.actions;
export default WeightChartSlice.reducer;
