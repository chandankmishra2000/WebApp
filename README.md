# TaskNest 

**TaskNest** is a full-stack task management web application built as part of a take-home assignment for a Full-Stack Developer interview.

The app allows users to manage tasks with support for creating, viewing, editing, deleting, and filtering tasks based on their status. It uses a simple React + Tailwind CSS frontend and a Node.js + Express backend with in-memory storage.

---

## Features

### Frontend (React + Tailwind CSS)
- Display a list of tasks (title, description, status)
- Add new tasks
- Edit and delete tasks
- Filter tasks by status: `To Do`, `In Progress`, `Done`
- Clean, responsive design with Tailwind CSS
- No build tools required — React runs via CDN

### Backend (Node.js + Express)
- RESTful API with endpoints:
  - `GET /tasks` – Fetch all tasks
  - `POST /tasks` – Create a task
  - `PUT /tasks/:id` – Update a task
  - `DELETE /tasks/:id` – Delete a task
- Input validation (`title` and `status` required)
- In-memory storage (array-based)
- CORS enabled

---

##  Folder Structure
TaskNest/
├── backend/
│ └── server.js # Express server
├── frontend/
│ └── index.html # React + Tailwind frontend (single file)
└── README.md

---

##  How to Run Locally

###  Prerequisites
- Node.js installed
- Postman or browser to test API
- Any browser (for opening the frontend HTML file)

---

###  Step 1: Run the Backend

```bash
cd TaskNest/backend
npm install express cors
node server.js

