import React,{useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {logoutdoctor,updateProfile } from "../../features/doctor/doctorslice";
import { useNavigate } from "react-router-dom";

const DashbordDoc = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const[isEditing, setIsEditing] = useState(false);


   const doctor = useSelector((state) => state.doctor.loggedInDoctor);
    console.log("Doctor:", doctor);
if (!doctor) {
    return <div>Please log in to view your dashboard.</div>;
  }

const [formData, setFormData] = useState(doctor || {});

  const handleLogout = () => {
    dispatch(logoutdoctor());
    navigate("/login");
  };

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({      ...formData,
      [name]: value
    });
  }

  const handleUpdateProfile = () => {
     setFormData(doctor);
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    dispatch(updateProfile(formData)); 
    setIsEditing(false);
      console.log("Updated Doctor Info:", formData);
  };
    
 
  return (
   <div style={{ padding: "30px" }}>
    <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        disabled={!isEditing}
      />
<br />
      <label>Specialization:</label>
      <input
        type="text"
        name="specialization"
        value={formData.specialization}
        onChange={handleChange}
        disabled={!isEditing}
      />
<br />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        disabled={!isEditing}
      />
      <br />
      <label>Phone:</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        disabled={!isEditing}
      />
<br />
      <label>Address:</label>
      <input
        type="text"
        name="location"
        value={formData.location || ""}
        onChange={handleChange}
        disabled={!isEditing}
      />
      <br />

      <label>Status:</label>
      <input
        type="text"
        name="status"
        value={formData.status || ""}
        onChange={handleChange}
        disabled={!isEditing}
      />
      <br />
        {isEditing ? (
        <button onClick={handleSave}>💾 Save</button>
      ) : (
        <button onClick={handleUpdateProfile}>✏️ Update Profile</button>
      )}
    
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default DashbordDoc