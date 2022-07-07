import { React } from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const Login = () => {
  return (
    <div className="form login-form">
      <div className="heading2">Welcome to PlayPause</div>
      <div className="heading3 welcome-msg">
        Welcome back, please enter your details
      </div>
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

      <button className="secondary-btn">Sign In with Test Credentials</button>
      <Link className="action-btn sign-up-link" to="/Signup">
        Don't have an account? Signup
      </Link>
    </div>
  );
};

export { Login };
