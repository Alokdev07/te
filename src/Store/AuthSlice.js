import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [{
        name : "",
        email : ""
    }]
}

export const AuthSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        addData : (state,action) => {
          const data = {
             name : action.payload.name,
             email : action.payload.email
          }
          state.data.push(data)
        }
        
    }
})

export const {addData} = AuthSlice.actions
export default AuthSlice.reducer
