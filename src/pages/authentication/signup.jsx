import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import "./auth.css";

const Signup = () => {
  const { signupHandler } = useAuth();
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });

  const signupFormHandler = (event) => {
    event.preventDefault();
    signupHandler(newUser);
  };

  return (
    <form className="form signup-form" onSubmit={signupFormHandler}>
      <div className="heading2">Welcome to PlayPause</div>
      <label htmlFor="username" className="input-name">
        Username
      </label>
      <input
        type="text"
        className="username input-box"
        placeholder="Type your name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        required
        autoFocus
      />
      <label htmlFor="username" className="input-name">
        Email Address
      </label>
      <input
        type="email"
        className="username input-box"
        placeholder="Type your email address"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        required
      />
      <label htmlFor="password" className="input-name">
        Password
      </label>
      <input
        type="password"
        className="password input-box"
        placeholder="Type your password"
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        required
      />
      <Link to="/login">Already have an account?</Link>
      <button className="secondary-btn" type="submit">
        Signup
      </button>
    </form>
  );
};

export { Signup };
