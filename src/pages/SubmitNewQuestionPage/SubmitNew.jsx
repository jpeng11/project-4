import React from "react";

import { Card, Form, Message, FormField } from "semantic-ui-react";
import Axios from "axios";

class SubmitNew extends React.Component {
  state = {
    question: "",
    answer: "",
    category: "javascript",
    submitSuccess: false,
  };

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
    this.setState({
      submitSuccess: true,
      question: "",
      answer: "",
      category: "javascript",
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
              value={this.state.question}
            />
            <Form.TextArea
              label="Answer"
              name="answer"
              onChange={this.handleInputChange}
              value={this.state.answer}
            />
            <FormField>
              <label>Category</label>
              <select
                name="category"
                onChange={this.handleInputChange}
                value={this.state.category}
              >
                <option disabled selected value="default">
                  --- Select an Category ---
                </option>
                <option value="general">General</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="javascript">JavaScript</option>
                <option value=""></option>
              </select>
            </FormField>
            {this.state.category ? (
              <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
            ) : (
              <Form.Button onClick={this.handleSubmit} disabled>
                Submit
              </Form.Button>
            )}
          </Form>
        </Card.Content>
        {this.state.submitSuccess ? (
          <Message>
            <Message.Header>Submit successful</Message.Header>
            <p>
              Your question submit successful, we will review your question and
              add it to database
            </p>
          </Message>
        ) : (
          ""
        )}
      </Card>
    );
  }
}

export default SubmitNew;
