import React from "react";

import { AddTodo } from "./components/AddTodo";
import { List } from "./components/List";

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 0
    };
  }

  render() {
    return (
      <div>
        <h2>TodoApp</h2>
        <AddTodo addTodo={this.addTodo} />
        <List todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }

  addTodo = title => {
    const { todos, nextId } = this.state;
    this.setState({
      todos: [...todos, { id: nextId + 1, title: title }],
      nextId: nextId + 1
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id;
      })
    });
  };
}
