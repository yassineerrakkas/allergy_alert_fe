import React, { useState } from "react";
import "../css/Login.css";
import { NavLink, useNavigate } from "react-router-dom";

export const Login = ({ changestate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        response.json().then((data) => {
          if (data["status"]) {
            localStorage.setItem("islogin", "true");
            changestate(true);
            localStorage.setItem("useremail", email);
            navigate("/");
          } else {
            setErrorMessage("Invalid email or password"); // Set error message
          }
        });
      } else {
        console.error("Login failed");
        setErrorMessage("Login failed"); // Set error message
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Error during login"); // Set error message
    }
  };

  return (
    <div className="login-container">
      <div className="form-box">
        <div className="form-value">
          <form className="form-ac" onSubmit={handleSubmit}>
            <h2 className="form-title">Login</h2>
            <div className="inputbox">
              <input
                placeholder="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="inputbox">
              <input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="forget">
              <NavLink to="/"> Forget Password ?</NavLink>
            </div>
            <button type="submit" className="button">
              Login
            </button>
            {errorMessage && (
              <>
                <div className="error-message">{errorMessage}</div>
              </>
            )}
            <div className="register">
              <p>
                Don't have an account?{" "}
                <NavLink to="/create-account">CREATE ACCOUNT</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
