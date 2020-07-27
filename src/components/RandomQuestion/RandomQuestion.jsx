import React from "react";
import axios from "axios";
import { Card, Button, Transition } from "semantic-ui-react";

import "./RandomQuestion.css";
class RandomQuestion extends React.Component {
  constructor() {
    super();
    this.state = { questions: [], visible: false };
  }

  componentDidMount() {}

  getQuestion = () => {
    axios
      .get("/api/questions/random")
      .then((response) => {
        this.setState({ questions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  toggleVisibility = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <button onClick={this.getQuestion}>Get Question</button>
        {!this.state.questions.length ? (
          <></>
        ) : (
          <Card>
            <Card.Content>
              <Card.Header>Question</Card.Header>
            </Card.Content>
            {this.state.questions.map((quest, idx) => {
              return (
                <>
                  <Card.Content key={idx}>{quest.question}</Card.Content>
                  <Card.Content key={idx}>
                    <Button onClick={this.toggleVisibility}>Show Answer</Button>
                  </Card.Content>
                  <Transition
                    visible={visible}
                    animation="scale"
                    duration={500}
                  >
                    <Card.Content>{quest.answer}</Card.Content>
                  </Transition>
                </>
              );
            })}
          </Card>
        )}
      </div>
    );
  }
}

export default RandomQuestion;
