import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    query: '',
  };

  handleInputChange = event => {
    const query = event.currentTarget.value;

    this.setState({ query });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);
    this.reset();
  };

  reset = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    const { query } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          onChange={this.handleInputChange}
          value={query}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
