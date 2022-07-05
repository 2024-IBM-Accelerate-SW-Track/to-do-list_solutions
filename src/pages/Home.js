import React, { Component } from "react";
import Todos from "../component/todos";
import AddTodo from "../component/AddTodo";
import "../pages/Home.css";


class Home extends Component {

  state = {
    todos: [],
  };
    

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  addTodo = (todo) => { 
    const exists = this.state.todos.find(t => t.content === todo.content);
    if (exists || todo.content.trim() == null || todo.content.trim() === '' || todo.due == null || todo.due === 'Invalid Date'){ return }
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
    });
  };

  updateTodo = (id, newTodo) => {
    if (newTodo.content.trim() === null || newTodo.content.trim() === ''){ return }
    this.setState(prev => prev.map(item => (item.id === id ? newTodo : item)))
  }
   
  render() {  
    return (
      <div className="Home">
        <h1>Todo List </h1>
        
        <Todos todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} />
      </div>
    );
  }
}

export default Home;
