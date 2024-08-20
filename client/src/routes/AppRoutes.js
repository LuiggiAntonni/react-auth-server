import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login.jsx";
import Me from "../pages/Me.jsx";
import Header from "../components/Header";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
