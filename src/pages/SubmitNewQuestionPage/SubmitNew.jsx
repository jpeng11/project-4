import React from "react";

import { Card, Form, Button, FormField } from "semantic-ui-react";
import Axios from "axios";

class SubmitNew extends React.Component {
  state = { question: "", answer: "", category: "", optionValue: "" };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("/api/questions/submitNew", {
      question: this.state.question,
      answer: this.state.answer,
      category: this.state.category,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <Card centered>
        <Card.Content>
          <Card.Header>Submit New Question</Card.Header>
        </Card.Content>
        <Card.Content>
          <Form>
            <Form.TextArea
              required
              label="Question"
              name="question"
              onChange={this.handleInputChange}
            />
            <Form.TextArea
              label="Answer"
              name="answer"
              onChange={this.handleInputChange}
            />
            <FormField>
              <label>Category</label>
              <select name="category" onChange={this.handleInputChange}>
                <option disabled selected>
                  --- Select an Category ---
                </option>
                <option value="general">General</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
              </select>
            </FormField>

            <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
          </Form>
        </Card.Content>
      </Card>
    );
  }
}

export default SubmitNew;
