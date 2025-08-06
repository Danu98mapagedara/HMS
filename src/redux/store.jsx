import  {configureStore} from '@reduxjs/toolkit';
import doctorReducer from '../features/doctor/doctorslice';

const store = configureStore({
    reducer: {
        doctor: doctorReducer
    }
   
});

export default store;
