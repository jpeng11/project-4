import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/login" className="NavBar-link">
        Login
      </Link>
      <Link to="/signup" className="NavBar-link">
        Sign up
      </Link>
    </div>
  );
};

export default NavBar;
