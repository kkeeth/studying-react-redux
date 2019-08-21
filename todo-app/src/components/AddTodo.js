import React from "react";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <div>
        <h2>AddTodo</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="type title name"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add to todo list" />
        </form>
      </div>
    );
  }

  handleChange = e => {
    const title = e.currentTarget.value;
    this.setState({ title: title });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
}
