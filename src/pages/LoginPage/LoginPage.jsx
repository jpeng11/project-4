import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
//import userService from "../../utils/userService";

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {};
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="LoginPage">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="email" placeholder="Email" value={this.state.email} />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={this.state.pw}
            />
          </div>
          <div>
            <button>Login</button>
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
