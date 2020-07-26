import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  let nav = props.user ? (
    <div className="NavBar">
      <Link to="/login" className="NavBar-link">
        Login
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="" className="NavBar-link" onClick={props.handleLogout}>
        LOG OUT
      </Link>
    </div>
  ) : (
    <div className="NavBar">
      <Link to="/login" className="NavBar-link">
        Login
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className="NavBar-link">
        Sign up
      </Link>
    </div>
  );
  return <div className="NavBar">{nav}</div>;
};

export default NavBar;
