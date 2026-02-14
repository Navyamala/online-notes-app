# Online Notes App

A Full Stack Notes Application built using Node.js, Express, MongoDB, and JavaScript.

## Features
- User registration and login
- JWT authentication
- Create, Read, Update, Delete notes
- MongoDB Atlas database

## How to Run Project

### Backend
cd backend  
npm install  
npm start  

### Frontend
cd frontend  
npm install  
npm start  

## Environment Variables
Create a .env file in backend folder:

MONGO_URI=your_mongodb_url  
PORT=5000  

### Live Backend

The backend of the app is deployed on Render and is available at:  

🔗 [Online Notes App Backend](https://online-notes-app-2.onrender.com/)

### API Endpoints

- `GET /api/notes` — Get all notes  
- `POST /api/notes` — Create a new note  
- `PUT /api/notes/:id` — Update a note by ID  
- `DELETE /api/notes/:id` — Delete a note by ID

