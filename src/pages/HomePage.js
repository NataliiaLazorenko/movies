import React, { Component } from 'react';
import apiService from '../services/api';
import Container from '../components/Container';
import MovieList from '../components/MovieList';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const movies = await apiService.fetchTrends();

    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;

    return (
      <section className="trend-movies">
        <Container>
          <h1>Tranding today</h1>
          <MovieList movies={movies} />
        </Container>
      </section>
    );
  }
}

export default HomePage;
