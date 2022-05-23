import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { DatePicker , LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

class AddTodo extends Component {
  state = {
    content: "",
    date: "",
    due: null,
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
      date: Date().toLocaleString(),
    });
  };
  
  handleTimeChange = (e) => {
    let dueDate = new Date(e).toLocaleDateString()
    this.setState({
      due: dueDate,
    });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
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
            id="outlined-basic"
            label="Add New Item"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.content}
          /> 
           <LocalizationProvider dateAdapter={AdapterDateFns}>
           <DatePicker
              label="Due Date"
              value={this.state.due}
              onChange={this.handleTimeChange}
              renderInput={(params) => <TextField {...params} />}
            />
           </LocalizationProvider>
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
