import React from 'react'
import  {createSlice} from '@reduxjs/toolkit'

const initialState={
    loggedInDoctor:null,
}


const doctorslice = createSlice({
    name: 'doctor',
    initialState,
    reducers:{
        loginDoctor:(state,action)=>{
            state.loggedInDoctor = action.payload;
        },
logoutdoctor:(state,action)=>{
            state.loggedInDoctor = null;
},
        updateProfile:(state, action) => {
            state.loggedInDoctor = {
                ...state.loggedInDoctor,
                ...action.payload
            };
    },
    updateSlots:(state,action)=>{
        if (state.loggedInDoctor) {
            state.loggedInDoctor.availableSlots = action.payload;
        }
    },
},
});


export const { loginDoctor } = doctorslice.actions;
export default doctorslice.reducer;