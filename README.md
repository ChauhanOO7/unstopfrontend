# unstopassignment

# Apparel Submission Platform - MVP

Project Overview:

This project is an MVP (Minimum Viable Product) for a platform where users can submit information about their unused or worn-out apparel for proper disposal, donation, or recycling. It is built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

The primary objective is to provide a simple and intuitive interface for users to submit apparel details and view the list of submitted items.

Features Implemented
Apparel Submission Form: Users can submit details of unused or worn-out apparel, including the type, condition, action (recycle/donate), and their name.
Apparel List Display: The submitted apparel details are listed in real-time, displaying the type, condition, action, and user information.
Backend API: A RESTful API built with Express and MongoDB to handle storing and retrieving apparel information.
Frontend UI: A React frontend that allows users to interact with the form and view the list of submissions.
Validation: The form ensures that all fields are filled before allowing submission.
Technology Stack
Frontend: React.js, Axios
Backend: Node.js, Express.js, MongoDB (Mongoose)
Database: MongoDB (Atlas or local MongoDB instance)
Middleware: CORS for handling cross-origin requests
Environment: dotenv for environment variable management
Approach
Backend Development:

Set up MongoDB for storing apparel submissions.
Created a REST API with routes to handle the submission and retrieval of apparel information.
Used Mongoose for defining the schema for the Apparel model.
Frontend Development:

Built a simple React application with two components: ApparelForm (for submission) and ApparelList (for viewing submissions).
Connected the React frontend to the Node.js backend using Axios for API requests.
API Routes:

POST /api/apparel/submit: To submit a new apparel item.
GET /api/apparel/all: To retrieve all submitted apparel items.
Data Validation:

Ensured that all required fields (type, condition, action, and user) are provided during form submission.
How to Install and Run the Project
Prerequisites
Make sure you have the following installed:

Node.js (with npm)
MongoDB (use MongoDB Atlas or a local instance)
Backend Setup
Clone the repository:

bash
Copy code
https://github.com/ChauhanOO7/unstopassignment.git
Navigate to the backend directory:

cd unstopassignment/backend
Install backend dependencies:

npm install
Create a .env file in the backend directory and add your MongoDB URI:
env
MONGO_URI=your_mongodb_uri
PORT=5000
Run the backend server:

For development mode (with Nodemon):

npm run dev
Or for production:

npm start
The backend will be running at http://localhost:5000.

Frontend Setup
Navigate to the frontend directory:

cd ../frontend
Install frontend dependencies:
npm install
Run the frontend development server:
npm start
The frontend will be available at http://localhost:3000.


Usage
Go to http://localhost:3000.
Fill in the apparel submission form with details such as type, condition, action (recycle/donate), and your name.

Click Submit.

Navigate to api/apparel/all to view the list of all submitted apparel.