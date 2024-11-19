import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to CodeShort</h1>
      <p>Your one-stop platform for concise IT and coding news.</p>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
