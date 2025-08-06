// Each doctor has unique username and password
export const doctorList = [
  {
    id: 1,
    name: "Dr. John Doe",
    username: "john",
    password: "john123",
    specialization: "Cardiology",
    email: "john@hospital.com",
    phone: "123456789",
    availableSlots: ["10:00 AM", "2:00 PM"],
  },
  {
    id: 2,
    name: "Dr. Alice Smith",
    username: "alice",
    password: "alice123",
    specialization: "Dermatology",
    email: "alice@hospital.com",
    phone: "987654321",
    availableSlots: [],
  },
];
export default doctorList;