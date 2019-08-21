import React from "react";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>AddTodo</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="type title name"
            value={title}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Add to todo list"
            disabled={title === ""}
          />
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
    if (e.target.title.value === "") {
      return;
    }
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
}
