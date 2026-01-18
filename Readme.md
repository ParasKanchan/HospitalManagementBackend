usecaseDiagram
title Healthcare Wellness & Preventive Care Portal

actor Patient
actor "Healthcare Provider" as Provider

![Uploading WhatsApp Image 2026-01-18 at 5.50.22 PM.jpeg…]()

"Healthcare Wellness Portal" {

  Patient --> (Register)
  Patient --> (Login)
  Patient --> (View Dashboard)
  Patient --> (Manage Profile)
  Patient --> (Set Wellness Goals)
  Patient --> (Log Daily Activities)
  Patient --> (View Preventive Reminders)
  Patient --> (View Public Health Information)
  Patient --> (Logout)

  Provider --> (Login)
  Provider --> (View Assigned Patients)
  Provider --> (View Patient Goals)
  Provider --> (Track Compliance Status)
  Provider --> (Review Preventive Checkups)
  Provider --> (Logout)

  (Login) <|-- (JWT Authentication)
  (Manage Profile) <|-- (Update Health Information)
  (View Dashboard) <|-- (Wellness Progress Overview)
}

#  Healthcare Wellness Portal

##  Problem Statement

In today’s fast-paced world, people often struggle to manage their health records, wellness data, and medical appointments in a single place.
The *Healthcare Wellness Portal* provides a centralized, secure platform to manage health data, book appointments, and track wellness efficiently.

---

##  Objectives

* Provide a secure healthcare management platform
* Enable wellness tracking & preventive care
* Simplify appointment booking
* Promote health awareness

---

##  Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* JWT Authentication

### Database

* MongoDB (MongoDB Atlas)

### Tools

* Git & GitHub
* Postman
* VS Code

---

##  System Architecture


React Frontend → Axios → Express API → MongoDB
                     ↓
               JWT Authentication


---

##  Project Structure

### Backend


backend/
│── config/
│── controllers/
│── models/
│── routes/
│── middleware/
│── server.js
│── .env


### Frontend


frontend/
│── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── context/
│   ├── App.jsx
│── index.css


---

##  Key Features

* User Registration & Login (JWT secured)
* Book & manage appointments
* Track wellness & health vitals
* View health tips & blogs
* Fully responsive UI using Tailwind CSS

---

##  API Endpoints (Sample)

### Authentication

* POST /api/auth/register
* POST /api/auth/login
* GET /api/auth/me

### Appointments

* POST /api/appointments
* GET /api/appointments/my

### Wellness

* POST /api/health
* GET /api/health/my

---

##  Testing

* APIs tested using *Postman*
* UI tested manually across devices


---

##  How to Run the Project

### Backend

bash
cd backend
npm install
npm run dev


### Frontend

bash
cd frontend
npm install
npm start


---


##  Hackathon Highlights

* Modular MERN architecture
* Secure authentication using JWT
* Clean and responsive UI/UX
* Real-world healthcare use case
* Team collaboration via GitHub

---

##  Future Enhancements

* Doctor login & dashboard
* Video consultation
* Health analytics & charts
* Notification system

---


---

##  Conclusion

The *Healthcare Wellness Portal* demonstrates a scalable, secure, and user-centric healthcare solution built using modern web technologies. It highlights effective team collaboration, clean architecture, and practical implementation of a real
