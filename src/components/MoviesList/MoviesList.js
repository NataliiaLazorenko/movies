import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { routes } from '../../routes';
import styles from './MoviesList.module.css'

const MoviesList = ({ movies, location }) => (
  <ul >
    {movies.map(({ id, title }) => (
      <li key={id} className={styles.moviesListItem}>
        <Link
          to={{
            pathname: `${routes.movies}/${id}`,
            state: { from: location },
          }}
          className={styles.movieLink}
        >
          {title}
        </Link>
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,

  location: PropTypes.object.isRequired,
};

export default withRouter(MoviesList);
