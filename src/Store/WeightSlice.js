import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   data :  [
    { gain: 0.0, a: 1, b: 0, c: 0 },
    { gain: 0.2, a: 2, b: 1, c: 1 },
    { gain: 0.4, a: 3, b: 2, c: 1 },
    { gain: 0.6, a: 3, b: 2, c: 2 },
    { gain: 0.8, a: 3, b: 3, c: 1 },
    { gain: 1.0, a: 4, b: 2, c: 2 },
    { gain: 1.2, a: 5, b: 1, c: 2 },
    { gain: 1.4, a: 2, b: 1, c: 1 },
    { gain: 1.6, a: 1, b: 1, c: 1 },
    { gain: 1.8, a: 2, b: 1, c: 0 },
    { gain: 2.0, a: 1, b: 2, c: 1 },
  ]
};

export const WeightSlice = createSlice({
  name: "Weight",
  initialState,
  reducers: {
    addData: (state, action) => {
       const data = {
          gain : action.payload.gain,
            a : action.payload.a,
            b : action.payload.b,
            c : action.payload.c
       }
       state.data.push(data)
    },
    deleteData: (state, action) => {
      state.data = state.data.filter((data) => data.name !== action.data.name);
    }
  }
});

export const { addData, deleteData } = WeightSlice.actions;
export default WeightSlice.reducer;
