import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import apiService from '../../services/api';
import Spinner from '../../components/Spinner';
import MovieDetails from '../../components/MovieDetails';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import Container from '../../components/Container';
import { routes } from '../../routes';
import styles from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    movieDetails: {},
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const { movieId } = this.props.match.params;
    const movieDetails = await apiService.fetchMovieDetails(movieId);
    console.log('movieDetails:', movieDetails);
    this.setState({ movieDetails, isLoading: false });
  }

  handleGoBack = () => {
    const { history, location } = this.props;

    location.state && location.state.from
      ? history.push(location.state.from)
      : history.push(routes.home);

    // Новий синтаксис з використанням optional chaining operator (?.) - поки погано транспайлиться
    // history.push(location?.state?.from || routes.home);
  };

  render() {
    const { movieDetails, isLoading } = this.state;
    const { match } = this.props;

    return (
      <>
        {isLoading && <Spinner />}
        {movieDetails.title && (
          <>
            <section className="movieDetails">
              <Container>
                <button type="button" onClick={this.handleGoBack}>
                  Go back
                </button>
                <MovieDetails movieDetails={movieDetails} />
              </Container>
            </section>

            <section className="AditionalInformation">
              <Container>
                <p>Additional information</p>
                <ul>
                  <li>
                    <NavLink to={`${match.url}/cast`}>Cast</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
                  </li>
                </ul>
              </Container>
            </section>

            {/* <Route path={`${match.path}/cast`} component={Cast} />
            <Route path={`${match.path}/reviews`} component={Reviews} /> */}
            <Route path={routes.cast} component={Cast} />
            <Route path={routes.reviews} component={Reviews} />
          </>
        )}
      </>
    );
  }
}

// MovieDetailsPage.defaultProps = {
//   poster_path: defaultImage,
//   overview: '',
// };

// MovieDetailsPage.propTypes = {
//   movieDetails: PropTypes.shape({
//     poster_path: PropTypes.string,
//     title: PropTypes.string.isRequired,
//     release_date: PropTypes.string.isRequired,
//     vote_average: PropTypes.number.isRequired,
//     overview: PropTypes.string,
//     genres: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//   }),
// };

export default MovieDetailsPage;

// додати дефолтне зображення і інші дефолтні значення
// описати propTypes
// замінити перевірку Object.keys
// додати try catch
// додати дефолтну сторінку
// додати спінер
// додати Load More для сторінки пошуку за ключовим словом
// додати дефолтну сторінку
// додати картку однієї книги
