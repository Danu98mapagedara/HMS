import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashbordDoc from './pages/doctor/dashborddoc'

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/doctor-dashboard" element={<DashbordDoc/>} />
     </Routes>
     
     </BrowserRouter>
       
    </>
  )
}

export default App
