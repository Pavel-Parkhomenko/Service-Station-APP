import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        checkRegistr: false
    },

    reducers:{
        changeCheckRegistr(state, action){
            state.checkRegistr = !state.checkRegistr;
        }
    }
})

export const {changeCheckRegistr} = userSlice.actions

export default userSlice.reducer