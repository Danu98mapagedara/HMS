Hospital Management System

The Hospital Management System (HMS) is a web application built to simplify hospital operations by managing patients, doctors, and appointments in one centralized platform.

🚀 Features

Doctor Management – Doctors can log in, view, and update their profiles.

Patient Management – Admin can add, update, and delete patient records.

Appointment Management – Schedule and manage doctor-patient appointments.

Admin Dashboard – Provides quick access to patients, doctors, and appointments.

State Management – Handled using Redux Toolkit for smooth data flow.

Data Persistence – Patient and doctor details stored in LocalStorage (can be connected to backend later).

 Tech Stack

Frontend: React.js

State Management: Redux Toolkit

Styling: CSS (with inline styles & reusable components)

Storage: LocalStorage (can be replaced with database)

 How It Works

Admin can manage patients, doctors, and appointments via the dashboard.

Doctors can update their profile information.

Patient details are displayed row by row, with options to edit or delete.

Add Patient functionality uses a modal form to create new patient records.

Data updates are synced with Redux store & persisted to LocalStorage.

 Purpose

This project demonstrates a complete hospital management workflow in a simple and scalable way. It can be extended into a full-fledged HMS by connecting to APIs and databases.
