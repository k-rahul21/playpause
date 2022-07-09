import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import "./auth.css";

const Login = () => {
  const { loginHandler } = useAuth();
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  const guestHandler = (event) => {
    event.preventDefault();
    setLoginDetails({
      email: "rahul@gmail.com",
      password: "rahul@123",
    });
  };

  const loginForm = (event) => {
    event.preventDefault();
    loginHandler(loginDetails);
  };

  console.log(loginDetails);

  return (
    <form className="form login-form" onSubmit={loginForm}>
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
        value={loginDetails.email}
        onChange={(e) =>
          setLoginDetails({ ...loginDetails, email: e.target.value })
        }
        required
      />
      <label htmlFor="password" className="input-name">
        Password
      </label>
      <input
        type="password"
        className="password input-box"
        placeholder="Type your password"
        value={loginDetails.password}
        onChange={(e) =>
          setLoginDetails({ ...loginDetails, password: e.target.value })
        }
        required
      />

      <button className="action-btn guest-login-btn" onClick={guestHandler}>
        Add Guest Credentials
      </button>
      <button className="secondary-btn" type="submit">
        Sign In
      </button>
      <Link className="action-btn sign-up-link" to="/Signup">
        Don't have an account? Signup
      </Link>
    </form>
  );
};

export { Login };
