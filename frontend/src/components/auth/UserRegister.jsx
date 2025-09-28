import React from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";

const UserRegister = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">User Registration</h2>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" required />
          </div>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
        <div className="auth-link">
          <Link to="/user/login">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
