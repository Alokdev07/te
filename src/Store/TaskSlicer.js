import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   data : [
    { name: "Completed", value: 75, color: "#2CA58D" }, // Green
    { name: "Violation", value: 25, color: "#E74C3C" }, // Red
  ]
};

export const TaskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    addData: (state, action) => {
       const data = {
          name : action.payload.name,
          value : action.payload.value,
          color : action.payload.color
       }
       state.data.push(data)
    },
    deleteData: (state, action) => {
      state.data = state.data.filter((data) => data.name !== action.data.name);
    }
  }
});

export const { addData, deleteData } = TaskSlice.actions;
export default TaskSlice.reducer;
