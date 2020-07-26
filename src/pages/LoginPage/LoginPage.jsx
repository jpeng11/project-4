import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import userService from "../../utils/userService";

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      // Successfully signed up
      this.props.history.push("/");
    } catch (err) {
      console.error(err);
      alert("Invalid Credentials!");
    }
  };

  render() {
    return (
      <div className="LoginPage">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="pw"
              value={this.state.pw}
              onChange={this.handleChange}
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
