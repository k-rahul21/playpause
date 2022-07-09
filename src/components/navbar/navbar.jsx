import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import { SidebarData } from "./sidebarData";
import "./navbar.css";
import { IconContext } from "react-icons";
import { useAuth } from "../../contexts/auth-context";

const Navbar = () => {
  const { logoutHandler, isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#222222" }}>
        <div className="navbar">
          <div className="left-nav">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <Link to="/" className="brand-name">
              <div className="brand-logo">
                <BsIcons.BsCollectionPlayFill />
              </div>
              <span className="brand-text">PlayPause</span>
            </Link>
          </div>
          <div className="right-nav">
            {isLoggedIn ? (
              <Link to="/" className="logout-logo" onClick={logoutHandler}>
                <MdIcons.MdOutlineLogout />
              </Link>
            ) : (
              <Link to="/login" className="login-logo">
                <AiIcons.AiOutlineUser />
              </Link>
            )}
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export { Navbar };
