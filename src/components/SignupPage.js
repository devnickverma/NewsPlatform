import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button, Typography, Paper, Alert } from "@mui/material";

function SignupPage({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validates format like 'abc@domain.com'
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z0-9]).{8,}$/;

    if (!email) {
      return "Email cannot be empty.";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }
    if (!passwordRegex.test(password)) {
      return "Password must be at least 8 characters long, include one uppercase letter, and one special character.";
    }
    if (!username) {
      return "Username cannot be empty.";
    }
    return null;
  };

  const handleSignup = async () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        email,
        password,
        username,
      });
      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
      navigate("/login");
    } catch (error) {
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, textAlign: "center" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Signup for CodeShort
        </Typography>
        {error && <Alert severity="error" sx={{ marginBottom: 2 }}>{error}</Alert>}
        <Box component="form" noValidate autoComplete="off">
          <TextField
            label="Username"
            type="text"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error && error.includes("email")} // Shows red outline for invalid email
            helperText={error && error.includes("email") ? error : ""}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error && error.includes("Password")} // Shows red outline for invalid password
            helperText={
              error && error.includes("Password")
                ? "Password must be 8+ characters, include an uppercase letter and a special character."
                : ""
            }
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={handleSignup}
          >
            Signup
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default SignupPage;
