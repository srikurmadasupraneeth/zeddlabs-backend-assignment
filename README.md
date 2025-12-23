# Zedd Labz - Node.js Internship Assignment

This repository contains a modular Node.js backend service built for the Zedd Labz technical evaluation. It features RESTful API endpoints, in-memory data management, and a DSA-based utility function with unit tests.

## Total Time Taken
** 2 Hours and 26 Minutes** (approx.)

---

## Tech Stack
- **Runtime:** Node.js (v18+)
- **Framework:** Express.js
- **Testing:** Jest & Supertest
- **Tools:** Git, Postman

---

## Setup & Installation
-- **Clone the Repository:** git clone https://github.com/srikurmadasupraneeth/zeddlabs-backend-assignment.git
-- **Install the necessary things:** npm install
-- **start the server:** cd backend - node index.js 
    and you will recieve server will be running at http://localhost:4000
-- **Running Tests: **npm test

   <img width="925" height="305" alt="Screenshot 2025-12-23 081132" src="https://github.com/user-attachments/assets/819bdd5d-8161-4c07-a110-62b4d7ca9301" />

## Api endpoints
--Root Endpoint
  Get
  Respose - 
  {
    "message": "Server is running successfully"
  }

  
<img width="1919" height="321" alt="Screenshot 2025-12-23 081103" src="https://github.com/user-attachments/assets/02b6eb24-d5eb-4a18-aca6-77731fddf440" />

--Get all users 
  http://localhost:4000/api/users
<img width="1919" height="1141" alt="Screenshot 2025-12-23 081305" src="https://github.com/user-attachments/assets/4504f8a9-5d33-4a74-886d-128045961b9c" />

--Post a user
  http://localhost:4000/api/users
  <img width="1916" height="1139" alt="Screenshot 2025-12-23 081353" src="https://github.com/user-attachments/assets/c031f153-72ac-4299-b4b5-e781ed21acf0" />

--Get community with full details
http://localhost:4000/api/communities/1
<img width="1919" height="1146" alt="Screenshot 2025-12-23 081421" src="https://github.com/user-attachments/assets/2c91f66e-76d0-4d10-96fe-cb08f97728df" />


## Project Structure
```text
backend/
├── routes/
│   └── api.js              # User and Community endpoints
├── utils/
│   └── findCommonMembers.js # DSA Intersection Logic
├── tests/
│   └── app.test.js         # Unit and Integration tests
├── index.js                # Server entry point
└── package.json            # Scripts and dependencies
