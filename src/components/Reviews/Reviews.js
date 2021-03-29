import React, { Component } from 'react';
import { fetchMovieReviews } from '../../services/api';
import Spinner from '../Spinner';
import Container from '../Container';
import ReviewsList from '../ReviewsList';

class Reviews extends Component {
  state = {
    reviews: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    this.setState({
      isLoading: true,
      error: null,
    });

    try {
      const reviews = await fetchMovieReviews(movieId);

      reviews.length > 0
        ? this.setState({ reviews })
        : this.setState({ error: 'We dont have any reviews for this movie' });
    } catch (error) {
      console.log(error); // замінити на нотифікацію
    }

    this.setState({ isLoading: false });
  }

  render() {
    const { reviews, isLoading, error } = this.state;

    return (
      <section className="reviews">
        <Container>
          {isLoading && <Spinner />}
          {reviews.length > 0 && <ReviewsList reviews={reviews} />}
          {error && <p>{error}</p>}
        </Container>
      </section>
    );
  }
}

export default Reviews;
