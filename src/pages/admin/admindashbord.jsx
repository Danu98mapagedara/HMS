import React from 'react';
import { useNavigate } from 'react-router-dom';

const adminDashboard = () => {
  const navigate = useNavigate();

  const cardStyle = {
    width: '250px',
    height: '150px',
    backgroundColor: '#1e0e67ff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    fontSize: '18px',
    fontWeight: '600'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '40px',
    gap: '20px',
    flexWrap: 'wrap'
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle} onClick={() => handleNavigate('/appointments')}>
        Appointments Management
      </div>
      <div style={cardStyle} onClick={() => handleNavigate('/patient')}>
        Patient Management
      </div>
      <div style={cardStyle} onClick={() => handleNavigate('/doctor')}>
        Doctor Management
      </div>
    </div>
  );
};

export default adminDashboard;
