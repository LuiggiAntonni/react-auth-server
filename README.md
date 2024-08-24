# 🛠️ Complete Project: Secure Authentication with Node.js Backend and React Frontend

Welcome to the repository of my complete authentication project, which integrates a robust backend using Node.js and Express, and a dynamic frontend with React. This project was developed with a focus on security, code organization, and ease of use. Below, you will find instructions for setting up and running the application, as well as an overview of the implemented features.

## 📋 Table of Contents

- [Overview](#-overview)
- [Technologies Used](#-technologies-used)
- [Main Features](#-main-features)
- [Installation and Setup](#-installation-and-setup)
- [Environment Variables](#-environment-variables)
- [How to Use](#-how-to-use)
  
## 🌟 Overview

This project is a complete example of a full-stack application, with the main focus on secure user authentication. It demonstrates advanced skills in backend and frontend development, implementing JWT authentication, secure token storage, protection against common attacks, and an intuitive and responsive user interface.

## 🚀 Technologies Used

- **Backend:** Node.js, Express, Mongoose (MongoDB), JWT, bcrypt
- **Frontend:** React, React Router, CSS Modules
- **Others:** Dotenv, CORS, Cookies

## 🔑 Main Features

- **Secure Authentication:** Implementation of login and registration with JWT.
- **Authorization:** Access control to protected routes with authorization middleware.
- **Input Validation:** Protection against SQL Injection and strict validation of input data.
- **Database Connection:** Integration with MongoDB using Mongoose, with a well-defined data schema.
- **CORS Configuration:** Support for cross-origin requests, allowing secure communication between frontend and backend.
- **User Interface:** Intuitive design with icon support, password reveal button, and login storage in cookies.

## 🛠️ Installation and Setup

### Project Structure
```bash
react-auth-server/
│
├── client/            # Contains the frontend code (React)
│
├── config/            # Contains the environment variables configuration
│   └── .env           # Environment variables configuration file for the backend
│
├── server/            # Contains the backend code (Node.js/Express)
│
├── .gitignore         # File to specify untracked files for Git
├── LICENSE            # License file for the project
└── README.md          # Project documentation
```

Follow the steps below to set up and start the application on your local machine.




### 1. Cloning the Repository

```bash
git clone https://github.com/LuiggiAntonni/react-auth-server.git
cd react-auth-server
```

### 2. Setting Up the Backend

Navigate to the backend folder:

```bash
cd server
```
Install the necessary dependencies:

```bash
npm install
```
Create a .env file inside the 'config' folder with the following environment variables  

```bash
cd ..
mkdir config
```
Create a .env file
```bash
PORT=5000
MONGO_URI=url
JWT_SECRET=secret
JWT_EXPIRES_IN=3h
FRONT_PORT=http://localhost:3000
REACT_APP_API_URL=http://localhost:5000
```
Start the backend server:

```bash
cd server
npm start
```
The backend will be running at http://localhost:5000.

### 3. Setting Up the Frontend

Navigate to the frontend folder:
```bash
cd ../client
```

Install the dependencies:

```bash
npm install
```
Start the frontend server:

```bash
npm start
```
The frontend will be available at http://localhost:3000.

## 🌐 Environment Variables

Ensure that you have set up the following environment variables correctly:

### Backend
```bash
PORT=5000: The port where the backend server will run.
MONGO_URI=mongodb://127.0.0.1:27017/mydatabase: MongoDB connection URL.
JWT_SECRET=Str0ng!Passw0rd: Secret key for signing JWT tokens.
JWT_EXPIRES_IN=3h: JWT token expiration time.
FRONT_PORT=http://localhost:3000: The port where the frontend server will run 
```
### Frontend
```bash
REACT_APP_API_URL=http://localhost:5000: API URL for communication with the backend.
```
## 🚀 How to Use

### 1. User Registration

- Access the login page at `http://localhost:3000/login`.
- Click the "Don't have an account? Sign Up" link on the login page.
- Fill in the required information and submit the form.
- If your data meets the email and password standards, you will be redirected to the `/me` route, where you will see your registration details and a welcome message (this welcome message only appears after registration).
- At this point, you can explore your user details.

### 2. Logout

- Click the logout button at the top of the page to securely log out of the application.

### 3. User Login

- After logging out, you you will be redirected to the login page at `http://localhost:3000/login`.
- Enter your credentials directly on the login page (no need to click the "Sign Up" link this time) and log in.
- Upon successful login, you will be redirected to the `/me` route, where you can view your user information.

## 🛡️ License
This project is licensed under the MIT License. See the LICENSE file for more details.
