import React from "react";

import {
  Card,
  Button,
  Transition,
  Checkbox,
  Form,
  Divider,
  Input,
} from "semantic-ui-react";
import "./SelectionCard.css";

const SelectionCard = (props) => {
  return (
    <div>
      <Transition visible={props.selectionVisible} duration={0}>
        <Card fluid centered>
          <Card.Content>
            <Card.Header>Select Category</Card.Header>
          </Card.Content>
          <Divider />
          <Form>
            <Form.Field>
              {props.questCategory.map((qc, idx) => {
                return (
                  <Checkbox
                    label={qc}
                    key={idx}
                    onClick={() => props.handleCategorySelection(idx)}
                  />
                );
              })}
            </Form.Field>
            <Form.Field required inline>
              <label>Number of Questions:</label>
              <Input
                type="number"
                min="1"
                width={2}
                value={props.numOfQuest}
                onChange={props.handleNumOfQuestInputChange}
                name="numOfQuest"
              ></Input>
            </Form.Field>
            <Divider section className="selectionDivider" />
            <Form.Field>
              {props.checkedCategory.length === 0 ? (
                <Button onClick={props.getQuestion} disabled>
                  Get Question
                </Button>
              ) : (
                <Button onClick={props.getQuestion}>Get Question</Button>
              )}
            </Form.Field>
          </Form>
        </Card>
      </Transition>
      <Transition visible={!props.selectionVisible} duration={0}>
        <div>
          <Button onClick={props.showSelection}>Return</Button>
        </div>
      </Transition>
    </div>
  );
};

export default SelectionCard;
