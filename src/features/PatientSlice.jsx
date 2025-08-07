import { createSlice} from "@reduxjs/toolkit";  

const initialState = {
    Patients:[],
}


const PatientSlice=createSlice({
    name: 'patient',
    initialState,
    reducers:{
        addPatient:(state,action)=>{
            state.Patients.push(action.payload);
        },

        updatePatient:(state,action)=>{
         const index=  state.Patients.findIndex((patient)=>patient.id===action.payload.id)
         if(index!==-1){
             state.Patients[index]=action.payload;
         }
        },
        deletePatient:(state,action)=>{
           state.Patients= state.Patients.filter((patient)=>patient.d!==action.payload.id)
        },
        getPatients:(state,action)=>{
            return state.Patients;
        }
    }





})
