import React from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";

const PartnerLogin = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Partner Login</h2>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
        <div className="auth-link">
          <Link to="/food-partner/register">Register as a Partner</Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogin;
