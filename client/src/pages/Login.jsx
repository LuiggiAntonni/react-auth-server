import React, { useState, useEffect } from "react";
import httpClient from "../services/httpClient";
import "../styles/login.css";

import { ReactComponent as EmailIcon } from "../assets/emailIcon.svg";
import { ReactComponent as UserIcon } from "../assets/userIcon.svg";
import { ReactComponent as PasswordIcon } from "../assets/passwordIcon.svg";
import { ReactComponent as EyeIcon } from "../assets/EyeIcon.svg";
import { ReactComponent as EyeSlashIcon } from "../assets/EyeSlashIcon.svg";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setName] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.title = "Login";
  }, []);

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
    const data = isLogin ? { email, password } : { username, email, password };

    try {
      const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
      const response = await httpClient.post(endpoint, data).catch((err) => {
        if (err.response) {
          if (err.response.status === 401 || err.response.status === 400) {
            setError(err.response.data.error);
          } else {
            setError(err.response.data.error || "Error, please try again.");
          }
        } else if (err.request) {
          setError("Request error. Please try again later.");
        } else {
          setError("An unexpected error occurred. Please try again later.");
        }
        throw err;
      });

      if (response.status === 200) {
        localStorage.setItem("user", response.data.token);
        window.location.href = "/me";
      }

      if (response.status === 201) {
        localStorage.setItem("user", response.data.token);
        window.location.href = "/me?welcome=true";
      }
    } catch (err) {
      // Additional error handling if needed
    }
  };

  return (
    <main>
      <div className="login-container">
        <h2>{isLogin ? "Login" : "Sign Up"} Page</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label htmlFor="username">
                Username:
                <div className="inputs-forms">
                  {" "}
                  <div className="icon-forms">
                    <UserIcon />
                  </div>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                    required={!isLogin}
                    placeholder="Your Name"
                  />
                </div>
              </label>
            </div>
          )}
          <div>
            <label htmlFor="email">
              Email:
              <div className="inputs-forms">
                <div className="icon-forms">
                  <EmailIcon />
                </div>

                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="email@example.com"
                />
              </div>
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <div className="inputs-forms">
                <div className="icon-forms">
                  <PasswordIcon />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </button>
              </div>
            </label>
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        <button
          className="toggle-button"
          onClick={() => {
            setIsLogin(!isLogin);
            setError("");
          }}
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </button>
      </div>
    </main>
  );
};

export default Login;
