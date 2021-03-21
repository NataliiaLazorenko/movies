import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/api';

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
      <>
        <h1>Tranding today</h1>
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
