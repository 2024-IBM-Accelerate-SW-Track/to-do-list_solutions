import React from "react";
import "../component/todos.css";
import {  Card, Grid, ListItem, ListItemText, Checkbox } from "@material-ui/core";

const Todos = ({ todos, deleteTodo }) => {

  const todoList = todos.length ? (
    todos.map((todo) => {
      let color = '#fffffff'
      if (new Date() > new Date(todo.due)){
        color = '#d9b60bf7'
      }
      return (
        <Grid key={todo.id} container spacing={2}>
          <Card style={{marginTop:10, background: color}}>
          
            <ListItem Button component="a" href="#simple-list">
              <Checkbox style={{paddingLeft:0}} color="primary" onClick={() => deleteTodo(todo.id)}/>
              <ListItemText primary={todo.content} secondary={todo.due}/>
            </ListItem>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todo's left </p>
  );

  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;
