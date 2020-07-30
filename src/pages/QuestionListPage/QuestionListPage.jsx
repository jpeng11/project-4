import React, { Component } from "react";
import Axios from "axios";

import { Card, Button, Header, Icon } from "semantic-ui-react";
import "./QuestionListPage.css";

class QuestionListPage extends Component {
  constructor() {
    super();
    this.state = { generalQuestions: [], answerVisible: {} };
  }

  componentDidMount = () => {
    Axios.get("/api/questions/showList")
      .then((response) => {
        this.setState({ generalQuestions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  toggleAnswerVisible = (idx) => {
    this.setState((prevState) => ({
      answerVisible: {
        ...prevState.answerVisible,
        [idx]: !prevState.answerVisible[idx],
      },
    }));
  };

  render() {
    return (
      <div>
        <div>
          <Button.Group>
            <Button>General</Button>
            <Button>HTML</Button>
            <Button>CSS</Button>
          </Button.Group>
        </div>
        <div id="general">
          <Header as="h1">General Question</Header>
          {this.state.generalQuestions.map((quest, idx) => {
            return (
              <div key={idx}>
                <Card fluid centered color="blue">
                  <Card.Content
                    as={Button}
                    onClick={() => this.toggleAnswerVisible(idx)}
                  >
                    <Card.Header className="questionContent">
                      {idx + 1} - {quest.question}
                    </Card.Header>
                  </Card.Content>
                  {this.state.answerVisible[idx] && (
                    <Card.Content className="answerContent">
                      {quest.answer}
                    </Card.Content>
                  )}
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default QuestionListPage;
