import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

// Import Components
import Navbar from "../../components/NavBar/NavBar";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import MainPage from "../../components/MainPage/MainPage";
import QuestionListPage from "../QuestionListPage/QuestionListPage";
import SubmitNew from "../SubmitNewQuestionPage/SubmitNew";
import ViewPendingPage from "../ViewPendingPage/ViewPendingPage";

// Utility
import userService from "../../utils/userService";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: userService.getUser() };
  }

  handleSignupOrLogin = async () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <MainPage user={this.state.user} />}
          />
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
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route exact path="/showList" render={() => <QuestionListPage />} />
          <Route exact path="/submitNew" render={() => <SubmitNew />} />
          <Route exact path="/viewPending" render={() => <ViewPendingPage />} />
        </Switch>
      </div>
    );
  }
}

export default App;
