import React from "react";
import axios from "axios";

import SelectionCard from "../SelectionCard/SelectionCard";
import QuestionCard from "../QuestionCard/QuestionCard";

//import {} from "semantic-ui-react";
import "./MainPage.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answerVisible: false,
      selectionVisible: true,
      duration: 0,
      currentQuestion: [],
      startIdx: 0,
      endIdx: 1,
      questCategory: ["General", "HTML", "CSS", "JS", "Node.js", "React"],
      checkedCategory: [],
      numOfQuest: 1,
      //checked: false,
    };
  }

  getQuestion = () => {
    this.toggleSelectionVisibility();
    axios
      .get("/api/questions/random", {
        params: {
          category: this.state.checkedCategory,
          numOfQuest: this.state.numOfQuest,
        },
      })
      .then((response) => {
        this.setState({
          questions: response.data,
          answerVisible: false,
          duration: 0,
        });
        this.updateCurrentQuestion();
        console.log(this.state.questions);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleNumOfQuestInputChange = (e) => {
    this.setState({ numOfQuest: e.target.value });
  };

  toggleAnswerVisibility = () => {
    this.setState((prevState) => ({
      answerVisible: !prevState.answerVisible,
      duration: 500,
    }));
  };

  toggleSelectionVisibility = () => {
    this.setState((prevState) => ({
      selectionVisible: !prevState.selectionVisible,
      questionVisible: !prevState.questionVisible,
    }));
  };

  prevQuest = () => {
    this.setState(
      (prevState) => ({
        startIdx: prevState.startIdx - 1,
        endIdx: prevState.endIdx - 1,
        answerVisible: false,
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
        answerVisible: false,
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

  showSelection = () => {
    this.toggleSelectionVisibility();
    this.setState({
      currentQuestion: [],
      checkedCategory: [],
      checked: false,
      numOfQuest: 1,
    });
    window.location.reload(false);
  };

  handleCategorySelection = (idx) => {
    this.setState({
      checkedCategory: [
        ...this.state.checkedCategory,
        this.state.questCategory[idx].toLowerCase(),
      ],
    });
  };

  render() {
    return (
      <div>
        <SelectionCard
          getQuestion={this.getQuestion}
          toggleSelectionVisibility={this.toggleSelectionVisibility}
          selectionVisible={this.state.selectionVisible}
          showSelection={this.showSelection}
          questCategory={this.state.questCategory}
          handleCategorySelection={this.handleCategorySelection}
          checkedCategory={this.state.checkedCategory}
          numOfQuest={this.state.numOfQuest}
          handleNumOfQuestInputChange={this.handleNumOfQuestInputChange}
          checked={this.state.checked}
        />

        <QuestionCard
          questions={this.state.questions}
          currentQuestion={this.state.currentQuestion}
          answerVisible={this.state.answerVisible}
          duration={this.state.duration}
          toggleAnswerVisibility={this.toggleAnswerVisibility}
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
