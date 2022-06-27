import React, { Component } from "react";
import { Button, TextField } from "@mui/material";
import Axios from "axios";
//**week5 implement a search service and test from front end */
class SearchTodo extends Component {
  state = {
    content: "",
    date: "",
    due: null,
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
      date: Date().toLocaleString('en-US'),
    });
  };
  

  handleSubmit = (e) => {
    e.preventDefault();
    // JSON object to be sent as body of request
    const jsonObject = {
      task: this.state.content
    };
  
    // HTTP Client to send a GET request
    Axios({
      method: "GET",
      url: "http://localhost:8080/search/item",
      data: {jsonObject},
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      console.log(res.data.message);
    });

    //this.props.addTodo(this.state);
    this.setState({
      content: "",
      date: "",
      due: null,
    });
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="search-item-input"
            label="Search for ToDo Item"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.content}
          /> 
          <Button
            id="search-item-button"
            name='submit'
            style={{ marginLeft: "10px",marginTop:10 }}
            onClick={this.handleSubmit}
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </form>
      </div>
    );
  }
}

export default SearchTodo;
