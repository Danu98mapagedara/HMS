import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {logoutdoctor } from "../../features/doctor/doctorslice";
import { useNavigate } from "react-router-dom";

const DashbordDoc = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutdoctor());
    navigate("/login");
  };

    const doctor = useSelector((state) => state.doctor.loggedInDoctor);
    console.log("Doctor:", doctor);

  if (!doctor) {
    return <div>Please log in to view your dashboard.</div>;
  }
  return (
   <div style={{ padding: "30px" }}>
      <h1>Welcome, {doctor.name}</h1>
      <p><strong>Specialization:</strong> {doctor.specialization}</p>
      <p><strong>Email:</strong> {doctor.email}</p>
      <p><strong>Phone:</strong> {doctor.phone}</p>

      <hr />

      <h3>Available Time Slots:</h3>
      {doctor.availableSlots.length > 0 ? (
        <ul>
          {doctor.availableSlots.map((slot, index) => (
            <li key={index}>{slot}</li>
          ))}
        </ul>
      ) : (
        <p>No available slots</p>
      )}

      <hr />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default DashbordDoc