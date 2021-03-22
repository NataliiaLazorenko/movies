import React, { Component } from 'react';
import styles from './SearchBar.module.css';

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
    const { query } = this.state;

    if (query === '') return;

    this.props.onSubmit(query);
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
          className={styles.inputField}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
