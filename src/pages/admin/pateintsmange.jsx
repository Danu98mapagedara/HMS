import React,{useState } from 'react'
import  {useSelector, useDispatch } from "react-redux";
import  {addPatient,updatePatient,deletePatient,getPatients} from "../../features/PatientSlice";

const pateintsmange = () => {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patient.Patients);
  console.log("Patients:", patients);

const [showModal, setShowModal] = useState(false);
  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    gender: '',
    disease: '',
    contact: ''
  });

  const handleChange = (e) => {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
   dispatch(addPatient({ id: Date.now(), ...newPatient }));
    setNewPatient({ name: '', age: '', gender: '', disease: '', contact: '' });
    setShowModal(false);
  };

     const handleDelete=(id)=>{
          dispatch(deletePatient({id}));
        }

   
  return (
      <div style={{ padding: '2rem' }}>
      <h2>Patient Management</h2>
      <button onClick={() => setShowModal(true)}>Add Patient</button>

      <table border="1" cellPadding="10" style={{ marginTop: '1rem', width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th><th>Age</th><th>Gender</th><th>Disease</th><th>Contact</th> <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td><td>{p.age}</td><td>{p.gender}</td><td>{p.disease}</td><td>{p.contact}</td>
              <td>
                     <button onClick={() => handleDelete(p.id)}>Delete</button>
                <button style={{color:"red"}} onClick={() => handleEdit(p.id)}>Edit</button>
              
              </td>
            </tr>
          ))}
       
        </tbody>
      </table>

      {showModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%',
          height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex',
          alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{ background: '#fff', padding: '2rem', borderRadius: '10px' }}>
            <h3>Add New Patient</h3>
            <input placeholder="Name" name="name" onChange={handleChange} /><br />
            <input placeholder="Age" name="age" onChange={handleChange} /><br />
            <input placeholder="Gender" name="gender" onChange={handleChange} /><br />
            <input placeholder="Disease" name="disease" onChange={handleChange} /><br />
            <input placeholder="Contact" name="contact" onChange={handleChange} /><br />
            <button onClick={handleSubmit}>Save</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default pateintsmange