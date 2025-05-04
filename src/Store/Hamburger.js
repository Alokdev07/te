import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
};

export const HamSlice = createSlice({
    name: "Hamburger",  
    initialState,
    reducers: {
        toggleValue: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
});

export const { toggleValue } = HamSlice.actions; 
export default HamSlice.reducer; 
