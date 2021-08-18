import React, { Component } from 'react';
import { fetchTrends } from '../../services/api';
import Spinner from '../../components/Spinner';
import Container from '../../components/Container';
import MoviesList from '../../components/MoviesList';
import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const movies = await fetchTrends();

      this.setState({ movies });
    } catch (error) {
      console.log(error);
    }

    this.setState({ isLoading: false });
  }

  render() {
    const { movies, isLoading } = this.state;

    return (
      <section className="trend-movies">
        <Container>
          <h1 className={styles.title}>Trending today</h1>
          {isLoading && <Spinner />}
          <MoviesList movies={movies} />
        </Container>
      </section>
    );
  }
}

export default HomePage;
