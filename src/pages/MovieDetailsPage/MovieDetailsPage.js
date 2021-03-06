import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';
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

    try {
      const movieDetails = await fetchMovieDetails(movieId);

      this.setState({ movieDetails });
    } catch (error) {
      this.setState({ error });
    }

    this.setState({ isLoading: false });
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
            <section className={styles.movieDetails}>
              <Container>
                <button
                  type="button"
                  onClick={this.handleGoBack}
                  className={`button ${styles.goBackButton}`}
                >
                  Go back
                </button>
                <MovieDetails movieDetails={movieDetails} />
              </Container>
            </section>

            <section className={styles.aditionalInformation}>
              <Container>
                <h3 className={styles.listTitle}>Additional information</h3>
                <ul>
                  <li>
                    <NavLink
                      to={`${match.url}/cast`}
                      className={styles.link}
                      activeClassName={styles.activeLink}
                    >
                      Cast
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`${match.url}/reviews`}
                      className={styles.link}
                      activeClassName={styles.activeLink}
                    >
                      Reviews
                    </NavLink>
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

export default MovieDetailsPage;
