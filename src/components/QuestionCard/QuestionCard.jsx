import React from "react";

import { Card, Button, Transition } from "semantic-ui-react";

import "./QuestionCard.css";
const QuestionCard = (props) => {
  return (
    <div>
      {!props.currentQuestion.length ? (
        <></>
      ) : (
        <>
          {props.currentQuestion.map((quest, idx) => {
            return (
              <div key={idx}>
                <Card fluid centered color="red">
                  <Card.Content>
                    <Card.Header>Question</Card.Header>
                  </Card.Content>
                  <Card.Content>{quest.question}</Card.Content>
                  <Card.Content>
                    <Button onClick={props.toggleAnswerVisibility}>
                      {props.answerVisible ? "Hide Answer" : "Show Answer"}
                    </Button>
                  </Card.Content>
                </Card>
                <Transition
                  visible={props.answerVisible}
                  animation="scale"
                  duration={props.duration}
                >
                  <Card centered fluid color="blue">
                    <Card.Content>
                      <Card.Header>Answer</Card.Header>
                    </Card.Content>
                    <Card.Content>{quest.answer}</Card.Content>
                  </Card>
                </Transition>
                {props.startIdx === 0 ? (
                  <Button onClick={props.prevQuest} disabled>
                    &#8592;
                  </Button>
                ) : (
                  <Button onClick={props.prevQuest}>&#8592;</Button>
                )}
                <span>
                  {props.endIdx} / {props.questions.length}&nbsp;
                </span>
                {props.endIdx === 5 ? (
                  <Button onClick={props.nextQuest} disabled>
                    &#8594;
                  </Button>
                ) : (
                  <Button onClick={props.nextQuest}>&#8594;</Button>
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default QuestionCard;
