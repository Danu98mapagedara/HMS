import React,{useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {logoutdoctor,updateProfile } from "../../features/doctor/doctorslice";
import { useNavigate } from "react-router-dom";

const DashbordDoc = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const[isEditing, setIsEditing] = useState(false);

  const handleLogout = () => {
    dispatch(logoutdoctor());
    navigate("/login");
  };

  const handleUpdateProfile = () => {
    setIsEditing(!isEditing);
  };

    const doctor = useSelector((state) => state.doctor.loggedInDoctor);
    console.log("Doctor:", doctor);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateProfile({ [name]: value }));
  }

  if (!doctor) {
    return <div>Please log in to view your dashboard.</div>;
  }


  return (
   <div style={{ padding: "30px" }}>
      <input type="text" value={doctor.name} onChange={handleChange} disabled={!isEditing} />
      <p><strong>Specialization:</strong> </p>
       <input type="text" value={doctor.specialization} onChange={handleChange} disabled={!isEditing} />
     
      <p><strong>Email:</strong> </p>
       <input type="text" value={doctor.email} onChange={handleChange} disabled={!isEditing}  />
      
     
      <p><strong>Phone:</strong>   </p>
      <input type="text" value={doctor.phone} onChange={handleChange} disabled={!isEditing} />

      <p><strong>Address:</strong> </p>
      <input type="text" value={doctor.location} onChange={handleChange} disabled={!isEditing} />
      
      <p><strong>Status:</strong> </p>
      <input type="text" value={doctor.status} onChange={handleChange} disabled={!isEditing} />



      <button onClick={()=>{handleUpdateProfile}}>Update  Profile</button>
    
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default DashbordDoc