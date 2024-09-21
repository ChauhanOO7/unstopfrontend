<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
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

# Backend Development:

Set up MongoDB for storing apparel submissions.
Created a REST API with routes to handle the submission and retrieval of apparel information.
Used Mongoose for defining the schema for the Apparel model.

# Frontend Development:

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

# Frontend Setup
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
>>>>>>> 5f4aa31f4ecb9ba47cb31cd767b9845044129c88
