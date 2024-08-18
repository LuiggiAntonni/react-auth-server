import React, { useState } from "react";
import httpClient from "../services/httpClient";
import "../styles/login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = { email, password };

    try {
      const response = await httpClient.post('/api/auth/login', loginData)
        .catch(err => {
          // Handle error here
          if (err.response) {
            // If the error response has a status 401
            if (err.response.status === 401) {              
              setError(err.response.data.error);
            } else {
              // Handle other error statuses
              setError(err.response.data.error || 'Login error, please try again.');
            }
          } else if (err.request) {
            // Request was made but no response received
            setError(err.response.data.error || 'Request error. Please try again later.');
          } else {
            // Something happened in setting up the request
            setError('An unexpected error occurred. Please try again later.');
          }
          // Rethrow the error so the try/catch block can handle it as well
          throw err;
        });
  
      // Check if the status is 200
      if (response.status === 200) {
        localStorage.setItem('authToken', response.data.token);
        window.location.href = '/me';
      }
    } catch (err) {
      // Additional error handling if needed
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@exemple.com"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Passoword"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
