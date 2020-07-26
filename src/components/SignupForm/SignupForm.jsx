import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";

import { Card, Button, Form } from "semantic-ui-react";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  };

  isFormInvalid() {
    return !(
      this.state.name &&
      this.state.email &&
      this.state.password === this.state.passwordConf
    );
  }

  render() {
    return (
      <div>
        <Card className="CardItem">
          <Card.Content>
            <Card.Header>Sign Up</Card.Header>
          </Card.Content>
          <Card.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  value={this.state.name}
                  name="name"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  name="password"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={this.state.passwordConf}
                  name="passwordConf"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Button disabled={this.isFormInvalid()}>Sign Up</Button>
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

export default SignupForm;
