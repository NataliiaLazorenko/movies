import React, { Component } from 'react';
import apiService from '../services/api';
import Spinner from '../components/Spinner';
import Container from '../components/Container';
import MovieList from '../components/MovieList';

class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const movies = await apiService.fetchTrends();

    this.setState({ movies, isLoading: false });
  }

  render() {
    const { movies, isLoading } = this.state;

    return (
      <section className="trend-movies">
        <Container>
          <h1>Tranding today</h1>
          {isLoading && <Spinner />}
          <MovieList movies={movies} />
        </Container>
      </section>
    );
  }
}

export default HomePage;
