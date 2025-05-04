import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { name: "Completed", value: 75, color: "#2CA58D" },
    { name: "Violation", value: 25, color: "#E74C3C" }
  ]
};

export const taskTrackerSlice = createSlice({
  name: "taskTracker",
  initialState,
  reducers: {
    addData: (state, action) => {
      const data = { name: action.payload.name, value: action.payload.value, color: action.payload.color };
      state.data.push(data);
    },
    deleteData: (state, action) => {
      state.data = state.data.filter(data => data.name !== action.payload.name);
    }
  }
});

export const { addData, deleteData } = taskTrackerSlice.actions;
export default taskTrackerSlice.reducer;
