import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        checkRegistr: "",
        clientInfo: {
            _id: '',
            feedback: '',
            fio: '',
            login: '',
            phone: '',
            password: '',
            email: ''
        },
        feedbacks: []
    },

    reducers: {
        changeCheckRegistr(state, action) {
            state.checkRegistr = action.payload.login;
        },
        setFeedbacks(state, action){
            state.feedbacks = [...action.payload.feedbacks];
        }
    }
})

export const { changeCheckRegistr } = userSlice.actions

export default userSlice.reducer