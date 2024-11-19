import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function SignupPage({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSignup = async ()  => {
    if (email && password && username) {
      try {
        const response = await axios.post("http://localhost:5000/api/auth/signup", {
          email,
          password,
          username
        });
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
        navigate("/login");
      } catch (error) {
        alert("Invalid credentials");
      } 
      setIsAuthenticated(true);
      navigate("/home");
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Signup for CodeShort</h2>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default SignupPage;
