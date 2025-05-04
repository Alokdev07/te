import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [
      { month: "Jan", value: 30 },
      { month: "Feb", value: 50 },
      { month: "Mar", value: 40 },
      { month: "Apr", value: 70 },
      { month: "May", value: 90 },
      { month: "Jun", value: 60 },
      { month: "Jul", value: 80 },
      { month: "Aug", value: 55 },
      { month: "Sep", value: 65 },
      { month: "Oct", value: 50 },
      { month: "Nov", value: 45 },
      { month: "Dec", value: 55 },
    ]
    
};

export const RechartSlice = createSlice({
  name: "Rechart",
  initialState,
  reducers: {
    addData: (state, action) => {
       const data = {
          month : action.payload.month,
          value : action.payload.value
       }
       state.data.push(data)
    },
    deleteData: (state, action) => {
      state.data = state.data.filter((data) => data.name !== action.payload.data);
    }
  }
});

export const { addData, deleteData } = RechartSlice.actions;
export default RechartSlice.reducer;
