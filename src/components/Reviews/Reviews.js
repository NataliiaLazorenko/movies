import React, { Component } from 'react';
import apiService from '../../services/api';
import Container from '../Container';

class Reviews extends Component {
  state = {
    reviews: [],
    currentPage: 1,
    totalPages: 1,
    // isLoading: false,
    error: null,
  };

  async componentDidMount() {
    await this.fetchMovies();
  }

  fetchMovies = () => {
    const { movieId } = this.props.match.params;
    const { currentPage } = this.state;
    this.setState({
      //   isLoading: true,
      error: null,
    });

    apiService
      .fetchMovieReviews(movieId, currentPage)
      .then(({ results, total_pages }) => {
        results.length > 0
          ? this.setState(prevState => ({
              reviews: [...prevState.reviews, ...results],
              currentPage: prevState.currentPage + 1,
              totalPages: total_pages,
            }))
          : this.setState({ error: 'We dont have any reviews for this movie' });
      })
      .catch(error =>
        this.setState({
          error,
        }),
      );
    //   .finally(() => {
    //     this.setState({ isLoading: false });
    //   });
  };

  render() {
    const { reviews, currentPage, totalPages, error } = this.state;

    const shouldRenderLoadMoreBtn =
      reviews.length > 0 && currentPage <= totalPages;

    return (
      <section className="reviews">
        <Container>
          {reviews.length > 0 && (
            <ul>
              {reviews.map(({ id, author, content }) => (
                <li key={id}>
                  <h3>Author: {author}</h3>
                  <p>{content}</p>
                </li>
              ))}
            </ul>
          )}
          {shouldRenderLoadMoreBtn && (
            <button onClick={this.fetchMovies}>Load more</button>
          )}
          {error && <p>{error}</p>}
        </Container>
      </section>
    );
  }
}

export default Reviews;
