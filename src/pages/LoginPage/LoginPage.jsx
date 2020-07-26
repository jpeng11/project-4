import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import userService from "../../utils/userService";

import { Card, Button, Form } from "semantic-ui-react";

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
        <Card className="CardItem">
          <Card.Content>
            <Card.Header>Login</Card.Header>
          </Card.Content>
          <Card.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="pw"
                  value={this.state.pw}
                  onChange={this.handleChange}
                />
              </Form.Field>

              <Button type="submit">Submit</Button>
              <Button as={Link} to="/">
                Cancel
              </Button>
            </Form>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default LoginPage;
