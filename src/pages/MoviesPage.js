import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import apiService from '../services/api';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
    error: null,
  };

  async componentDidUpdate(ptrevProp, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ error: null });

      const { results } = await apiService.fetchByKeyWord(this.state.query);
      this.setState({ movies: results });

      if (results.length === 0) {
        this.setState({ error: 'Nothing was found, specify your query' });
      }
    }
  }

  onChangeQuery = query => {
    this.setState({ query });
  };

  render() {
    const { movies, error } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.onChangeQuery} />
        {movies.length > 0 && (
          <ul>
            {movies.map(({ id, title }) => (
              <li key={id}>
                <Link to={`${this.props.match.url}/${id}`}>{title}</Link>
              </li>
            ))}
          </ul>
        )}
        {error && <p>{error}</p>}
      </>
    );
  }
}

export default MoviesPage;
