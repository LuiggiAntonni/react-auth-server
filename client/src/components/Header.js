import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogooutIcon } from "../assets/logoutIcon.svg";
import "../styles/header.css";

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // Corrigindo o problema de parsing do JSON
    try {
      const user = localStorage.getItem("user");
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      setIsAuthenticated(false);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    window.location.href = "/login";
  };
  return (
    <header>
      <nav className="nav-header">
        <Link to="/">Home</Link>
        <ul>
          {isAuthenticated ? (
            <li>
              <button onClick={handleLogout}><LogooutIcon /> Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
