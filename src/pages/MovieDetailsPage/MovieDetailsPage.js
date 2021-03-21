import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import apiService from '../../services/api';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import Container from '../../components/Container';
import { routes } from '../../routes';
import defaultImage from './defaultImage.png';
import styles from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  // можна відразу записувати потрібні властивості об'єкта
  state = {
    movieDetails: {},
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const movieDetails = await apiService.fetchMovieDetails(movieId);

    this.setState({ movieDetails });
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
    const {
      poster_path,
      title,
      release_date,
      vote_average,
      overview,
      genres,
    } = this.state.movieDetails;

    const { match } = this.props;

    return (
      Object.keys(this.state.movieDetails).length > 0 && (
        <>
          <section className="movieDetails">
            <Container>
              <div>
                <button type="button" onClick={this.handleGoBack}>
                  Go back
                </button>
                {poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                    alt="Movie poster"
                  />
                ) : (
                  <img
                    src={defaultImage}
                    alt="no poster available"
                    width="200"
                  />
                )}
              </div>
              <div>
                <h2>{`${title} (${release_date.split('-')[0]})`}</h2>
                <p>User score: {vote_average * 10} %</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <ul>
                  {genres.map(({ name }) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
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

          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </>
      )
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
