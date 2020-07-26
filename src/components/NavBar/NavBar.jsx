import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

import { Button } from "semantic-ui-react";

const NavBar = (props) => {
  let nav = props.user ? (
    <div className="NavBar">
      <Button as={Link} to="/login">
        Login
      </Button>
      &nbsp;&nbsp;
      <Button as={Link} to="" onClick={props.handleLogout}>
        LOG OUT
      </Button>
    </div>
  ) : (
    <div className="NavBar">
      <Button as={Link} to="/login">
        Login
      </Button>
      &nbsp;&nbsp;
      <Button as={Link} to="/signup">
        Sign up
      </Button>
    </div>
  );
  return <div className="NavBar">{nav}</div>;
};

export default NavBar;
