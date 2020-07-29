import React from "react";

import {
  Card,
  Button,
  Transition,
  Checkbox,
  Form,
  Divider,
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
          <Form>
            <Form.Field>
              {props.questCategory.map((qc, idx) => {
                return <Checkbox label={qc} key={idx} />;
              })}
            </Form.Field>
            <Divider section />
            <Form.Field>
              <Button onClick={props.getQuestion}>Get Question</Button>
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
