import React, { Component } from "react";
import Axios from "axios";

import { Card, Button, Header, Icon, Divider } from "semantic-ui-react";
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
            <Button to="#general">General</Button>
            <Button to="#html">HTML</Button>
            <Button>CSS</Button>
          </Button.Group>
        </div>
        <div id="general">
          <Header as="h1">General Question</Header>
          {this.state.generalQuestions.map((quest, idx) => {
            if (quest.category === "general") {
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
            }
          })}
        </div>
        <Divider hidden className="listPageDivider" />
        <div id="html">
          <Header as="h1">
            <Icon name="html5" />
            HTML Question
          </Header>
          {this.state.generalQuestions.map((quest, idx) => {
            if (quest.category === "html") {
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
            }
          })}
        </div>
        <Divider hidden className="listPageDivider" />
        <div id="css">
          <Header as="h1">
            <Icon name="css" />
            CSS Question
          </Header>
          {this.state.generalQuestions.map((quest, idx) => {
            if (quest.category === "css") {
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
            }
          })}
        </div>
        <Divider hidden className="listPageDivider" />
        <div id="javascript">
          <Header as="h1">
            <Icon name="javascript" />
            HTML Question
          </Header>
          {this.state.generalQuestions.map((quest, idx) => {
            if (quest.category === "javascript") {
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
            }
          })}
        </div>
      </div>
    );
  }
}

export default QuestionListPage;
