import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [
    { name: "Daily Site Visit", date: "Apr 06, 2023", status: "Completed", by: "Jimmy Becker", occurrence: "Daily" },
    { name: "Site Health Inspection", date: "Mar 20, 2023", status: "Completed", by: "Jose Morrison", occurrence: "Monthly" },
    { name: "Farm Vet Visit", date: "Mar 21, 2023", status: "Completed", by: "Henry Drake", occurrence: "Weekly" },
    { name: "Slow Feeding Visit", date: "Feb 16, 2023", status: "Completed", by: "Ryan Williams", occurrence: "Daily" },
    { name: "Weekly Checklist", date: "Jan 04, 2023", status: "Completed", by: "Laura Allen", occurrence: "Weekly" },
  ],
};

export const RcCompletionSlice = createSlice({
  name: "RecentCompletion",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.task.push({
        name: action.payload.name,
        date: action.payload.date,
        status: action.payload.status,
        by: action.payload.by,
        occurrence: action.payload.occurrence
      });
    },
    deleteData: (state, action) => {
      state.task = state.task.filter((task) => task.name !== action.payload.name);
    }
  }
});

export const { addData, deleteData } = RcCompletionSlice.actions;
export default RcCompletionSlice.reducer;
