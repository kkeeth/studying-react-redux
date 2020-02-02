import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }
  render() {
    const { buttonText } = this.props;
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="please type any words"
            value={this.state.title} onChange={this.handleChange} />
          <input type="submit" value={buttonText} />
        </form>
      </div>
    );
  }

  handleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { getUrls } = this.props;
    getUrls(this.state.title);
    this.setState({ title: "" });
  };
}

export default Search;
