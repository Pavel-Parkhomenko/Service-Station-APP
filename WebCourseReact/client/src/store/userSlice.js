import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        checkRegistr: false
    }
})

export default userSlice.reducer