import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

// Import Components
import Navbar from "../../components/NavBar/NavBar";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";

import userService from "../../utils/userService";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSignupOrLogin = async () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={() => (
            <LoginPage handleSignupOrLogin={this.handleSignupOrLogin} />
          )}
        />
      </div>
    );
  }
}

export default App;
