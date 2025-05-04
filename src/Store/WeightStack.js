import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   data :[
    { weight: 320, a: 2, b: 1, c: 1 },
    { weight: 340, a: 3, b: 2, c: 1 },
    { weight: 360, a: 2, b: 2, c: 2 },
    { weight: 380, a: 3, b: 3, c: 1 },
    { weight: 400, a: 4, b: 2, c: 2 },
    { weight: 420, a: 5, b: 1, c: 2 },
    { weight: 440, a: 2, b: 1, c: 1 },
    { weight: 460, a: 1, b: 1, c: 1 },
    { weight: 480, a: 2, b: 1, c: 0 },
    { weight: 500, a: 1, b: 2, c: 1 },
    { weight: 520, a: 2, b: 0, c: 1 },
  ]
};

export const WeightStackSlice = createSlice({
  name: "WeightChart",
  initialState,
  reducers: {
    addData: (state, action) => {
       const data = {
            weight: action.payload.weight,
            a : action.payload.a,
            b : action.payload.b,
            c : action.payload.c,
       }
       state.data.push(data)
    },
    deleteData: (state, action) => {
      state.data = state.data.filter((data) => data.weight !== action.payload.weight);
    }
  }
});

export const { addData, deleteData } = WeightStackSlice.actions;
export default WeightStackSlice.reducer;
