import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import HomePage from "./components/HomePage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <LoginPage setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <SignupPage setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <HomePage setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
