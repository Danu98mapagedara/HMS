import React, { useState } from 'react'
import  Doctorloginpage from'./doctor/logindoc.jsx';
import  Adminloginpage from './admin/adminlogin.jsx';


const LoginPage = () => {

    const[loginType,setLoginType]=useState(null)

  return (

    <div style={{ padding: "40px", textAlign: "center" }}>
      {!loginType && (
        <>
       
          <h2>Login As:</h2>
          <button onClick={() => setLoginType("doctor")}>👨‍⚕️ Doctor</button>
          <button onClick={() => setLoginType("admin")}>🛠️ Admin</button>
        </>
      )}
        {loginType === 'doctor' && <Doctorloginpage />}
        {loginType === 'admin' && <Adminloginpage />}


    </div>
  )
}

export default LoginPage