import React from "react";
import axios from "axios";

import QuestionCard from "../QuestionCard/QuestionCard";

import { Button } from "semantic-ui-react";
import "./MainPage.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      visible: false,
      duration: 0,
      currentQuestion: [],
      startIdx: 0,
      endIdx: 1,
    };
  }

  getQuestion = () => {
    axios
      .get("/api/questions/random")
      .then((response) => {
        this.setState({
          questions: response.data,
          visible: false,
          duration: 0,
        });
        this.updateCurrentQuestion();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  toggleVisibility = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
      duration: 500,
    }));
  };

  prevQuest = () => {
    this.setState(
      (prevState) => ({
        startIdx: prevState.startIdx - 1,
        endIdx: prevState.endIdx - 1,
        visible: false,
        duration: 0,
      }),
      () => {
        this.updateCurrentQuestion();
      }
    );
  };

  nextQuest = () => {
    this.setState(
      (prevState) => ({
        startIdx: prevState.startIdx + 1,
        endIdx: prevState.endIdx + 1,
        visible: false,
        duration: 0,
      }),
      () => {
        this.updateCurrentQuestion();
      }
    );
  };

  updateCurrentQuestion = () => {
    this.setState({
      currentQuestion: this.state.questions.slice(
        this.state.startIdx,
        this.state.endIdx
      ),
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.getQuestion}>Get Question</Button>
        <QuestionCard
          currentQuestion={this.state.currentQuestion}
          visible={this.state.visible}
          duration={this.state.duration}
          toggleVisibility={this.toggleVisibility}
          prevQuest={this.prevQuest}
          nextQuest={this.nextQuest}
          startIdx={this.state.startIdx}
          endIdx={this.state.endIdx}
        />
      </div>
    );
  }
}

export default MainPage;
