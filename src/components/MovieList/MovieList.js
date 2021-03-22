import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { routes } from '../../routes';

const MovieList = ({ movies, location }) => (
  <ul>
    {movies.map(({ id, title }) => (
      <li key={id}>
        <Link
          to={{
            pathname: `${routes.movies}/${id}`,
            state: { from: location },
          }}
        >
          {title}
        </Link>
      </li>
    ))}
  </ul>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,

  location: PropTypes.object.isRequired,
};

export default withRouter(MovieList);
