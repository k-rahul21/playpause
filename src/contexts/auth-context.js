import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI, signUpAPI } from "../apis/auth";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const loginHandler = async (user) => {
    console.log("entered login");
    try {
      const response = await loginAPI(user);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.foundUser));
        setToken(response.data.encodedToken);
        setUser(response.data.foundUser);
        navigate("/");
      }
      //   toast.success("login successful!!");
    } catch (error) {
      console.log(error);
      //   toast.error("Login Failed, Try Again!!");
    }
  };

  const signupHandler = async (user) => {
    console.log("entered signup", user);
    try {
      const response = await signUpAPI(user);
      if (response.status === 201) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.createdUser));
        setToken(response.data.encodedToken);
        setUser(response.data.createdUser);
        navigate("/");
      }
      //   toast.success("Signup successful!!");
    } catch (error) {
      console.log(error);
      //   toast.error("Signup Failed, Try Again!!");
    }
  };

  const logoutHandler = () => {
    navigate("/");

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ token, user, loginHandler, signupHandler, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
