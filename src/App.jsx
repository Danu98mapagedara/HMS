import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashbordDoc from './pages/doctor/dashborddoc'
import  Admin from './pages/admin/admindashbord'
import  Patient  from './pages/admin/pateintsmange'
import  Doctor  from './pages/admin/doctormanage'
import  Appoinment  from './pages/admin/appoinmentmange'
function App() {
 
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/doctor-dashboard" element={<DashbordDoc/>} />
      <Route path="/admin-dashboard" element={<Admin />} />
      <Route path="/patient" element={<Patient />} />
      <Route path="/appointment" element={<Appoinment />} />
      <Route path="/doctor" element={<Doctor />} />
     </Routes>
     
     </BrowserRouter>
       
    </>
  )
}

export default App
