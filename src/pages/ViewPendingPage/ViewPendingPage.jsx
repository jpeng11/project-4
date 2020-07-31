import React from "react";
import Axios from "axios";

import { Card, Button, Header, Form, FormField } from "semantic-ui-react";
import "./ViewPendingPage.css";

class ViewPendingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pendingQuestions: [],
      question: "",
      answer: "",
      category: "",
      _id: "",
    };
  }

  componentDidMount = () => {
    Axios.get("/api/questions/viewPending")
      .then((response) => {
        this.setState({ pendingQuestions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.state.pendingQuestions);
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  savePendingToLive = (e) => {
    e.preventDefault();
    Axios.post("/api/questions/movePendingToLive", {
      question: this.state.question,
      answer: this.state.answer,
      category: this.state.category,
      id: this.state._id,
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
      category: "",
    });
  };
  render() {
    return (
      <div>
        <Header as="h1">Pending Question</Header>
        <div>
          {this.state.pendingQuestions.map((quest, idx) => {
            return (
              <div key={idx}>
                <Card fluid centered color="yellow">
                  <Form>
                    <Form.Input
                      label="id"
                      name="_id"
                      value={quest._id}
                      readOnly
                    />
                    <Form.TextArea
                      label="Question"
                      name="question"
                      value={quest.question}
                      className="PendingQuestion"
                      onChange={this.handleInputChange}
                    />
                    <Form.TextArea
                      label="Answer"
                      name="answer"
                      value={quest.answer}
                      onChange={this.handleInputChange}
                    />
                    <FormField>
                      <label>Category</label>
                      <select
                        name="category"
                        onChange={this.handleInputChange}
                        value={quest.category}
                      >
                        <option value="general">General</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                      </select>
                    </FormField>
                    <Button.Group>
                      <Button>Delete</Button>
                      <Button.Or />
                      <Button positive onClick={this.savePendingToLive}>
                        Save
                      </Button>
                    </Button.Group>
                  </Form>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ViewPendingPage;
