import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // id : "",
    userName : ""
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser(state, action){
         
            // state.id = action.payload.id;
            state.userName = action.payload.userName;
        }
    }
})

export const {addUser} = userSlice.actions;
export default userSlice.reducer;