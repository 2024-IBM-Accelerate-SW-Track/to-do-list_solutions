import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

class AddTodo extends Component {
  state = {
    content: "",
    date: ""
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
      date: Date().toLocaleString(),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: "",
      date: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Add New Item"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.content}
          />
          <Button
            style={{ marginLeft: "10px",marginTop:10 }}
            onClick={this.handleSubmit}
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
