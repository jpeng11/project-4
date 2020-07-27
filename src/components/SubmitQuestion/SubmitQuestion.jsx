import React from "react";
import axios from "axios";

class SubmitQuestion extends React.Component {
  constructor() {
    super();
    this.state = { question: "", answer: "" };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { question, answer } = this.state;
    const questionList = { question, answer };
    axios
      .post("/api/addNewQuestion", questionList)
      .then(() => console.log("Added"))
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form action="" method="post" onSubmit={this.handleFormSubmit}>
          <div>
            <label htmlFor="">Question</label>
            <input
              type="text"
              name="question"
              id=""
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="">Answer</label>
            <input
              type="text"
              name="answer"
              id=""
              onChange={this.handleInputChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SubmitQuestion;
