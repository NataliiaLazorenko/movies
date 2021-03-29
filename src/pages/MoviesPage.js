import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import { fetchByKeyWord } from '../services/api';
import Spinner from '../components/Spinner';
import Container from '../components/Container';
import MoviesList from '../components/MoviesList';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    const { search } = this.props.location;
    const { query } = this.state;

    if (search === '' && query === '') return;

    this.setState({ isLoading: true });

    const prevQuery = search.slice(7, 10);

    try {
      const { results } = await fetchByKeyWord(prevQuery);
      this.setState({ movies: results });
    } catch (error) {
      console.log(error); // замінити на нотифікацію
    }

    this.setState({ isLoading: false });
  }

  async componentDidUpdate(prevProp, prevState) {
    const { query } = this.state;

    if (prevState.query !== query) {
      this.setState({ isLoading: true, error: null });

      try {
        const { results } = await fetchByKeyWord(query);
        this.setState({ movies: results });

        if (results.length === 0) {
          this.setState({ error: 'Nothing was found, specify your query' });
        }
      } catch (error) {
        console.log(error); // замінити на нотифікацію
      }

      this.setState({ isLoading: false });

      const { history } = this.props;
      history.push({
        search: `query=${query}`,
      });
    }
  }

  onChangeQuery = query => {
    this.setState({ query });
  };

  render() {
    const { movies, isLoading, error } = this.state;

    return (
      <Container>
        <SearchBar onSubmit={this.onChangeQuery} />
        {isLoading && <Spinner />}
        {movies.length > 0 && <MoviesList movies={movies} />}
        {error && <p>{error}</p>}
      </Container>
    );
  }
}

export default MoviesPage;
