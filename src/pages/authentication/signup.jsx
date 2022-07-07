import { React } from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const Signup = () => {
  return (
    <div className="form signup-form">
      <div className="heading2">Welcome to PlayPause</div>
      <label htmlFor="username" className="input-name">
        Username
      </label>
      <input
        type="text"
        className="username input-box"
        placeholder="Type your name"
        required
      />
      <label htmlFor="username" className="input-name">
        Email Address
      </label>
      <input
        type="email"
        className="username input-box"
        placeholder="Type your email address"
        required
      />
      <label htmlFor="password" className="input-name">
        Password
      </label>
      <input
        type="password"
        className="password input-box"
        placeholder="Type your password"
        required
      />
      <Link to="/login">Already have an account?</Link>
      <button className="secondary-btn">Create New Account</button>
    </div>
  );
};

export { Signup };
