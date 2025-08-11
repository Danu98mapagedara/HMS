import { createSlice} from "@reduxjs/toolkit";  


const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("patients");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading patients from localStorage:", error);
    return [];
  }
};
const initialState = {
    Patients:loadFromLocalStorage(),
}

const saveToLocalStorage = (patients) => {
    try {
        localStorage.setItem('patients', JSON.stringify(patients));
    } catch (error) {
        console.error("Error saving patients to local storage:", error);
    }
}
const PatientSlice=createSlice({
    name: 'patient',
    initialState,
    reducers:{
        addPatient:(state,action)=>{
            state.Patients.push(action.payload);
            saveToLocalStorage(state.Patients);
        },

        updatePatient:(state,action)=>{
         const index=  state.Patients.findIndex((patient)=>patient.id===action.payload.id)
         if(index!==-1){
             state.Patients[index]=action.payload;
         }
        },
        deletePatient:(state,action)=>{
           state.Patients= state.Patients.filter((patient)=>patient.id !== action.payload.id)
           console.log("Patient deleted:", action.payload.id);
        },
        getPatients:(state,action)=>{
            return state.Patients;
        }
    }
});

export const {addPatient,updatePatient,deletePatient,getPatients} = PatientSlice.actions;
export default PatientSlice.reducer;
