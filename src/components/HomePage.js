import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to CodeShort!</h1>
      <p>Your personalized feed is here.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default HomePage;
