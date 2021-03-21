import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import apiService from '../services/api';
import Container from '../components/Container';
import MovieList from '../components/MovieList';

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
      <Container>
        <SearchBar onSubmit={this.onChangeQuery} />
        {movies.length > 0 && <MovieList movies={this.state.movies} />}
        {error && <p>{error}</p>}
      </Container>
    );
  }
}

export default MoviesPage;
