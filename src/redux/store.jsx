import  {configureStore} from '@reduxjs/toolkit';
import doctorReducer from '../features/doctor/doctorslice';
import patientReducer from '../features/PatientSlice';

const store = configureStore({
    reducer: {
        doctor: doctorReducer,
        patient: patientReducer,
    },
   
});



export default store;
