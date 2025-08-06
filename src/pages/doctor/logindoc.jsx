import React,{useState} from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import  doctordetails, { doctorList } from '../../constants/doctordata'
import  {loginDoctor} from '../../features/doctor/doctorslice'

const logindoc = () => {

      const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
    const navigate = useNavigate();

  const onSubmit = (data) => {
    const { username, password } = data;

    const doctorfound=doctorList.find((doctor)=>doctor.username==username && doctor.password==password);
 if(doctorfound) {
      dispatch(loginDoctor(doctorfound));
      alert("Login successful");
      navigate("/doctor-dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
     <div style={{ marginTop: "30px", textAlign: "center" }}>
 <form onSubmit={handleSubmit(onSubmit)}>
        <div>
             <h2>Doctor Login</h2>
          <input type="text" placeholder="Username"{...register("username", { required: "Username is required" })}/>
          <br />
        
        </div>
        <div>
          <input type="password" placeholder="Password" {...register("password", { required: "Password is required" })} />
          <br />
      
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default logindoc;