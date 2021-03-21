import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { routes } from '../../routes';

const MovieList = ({ movies, location }) => (
  <ul>
    {movies.map(({ id, title }) => (
      <li key={id}>
        <Link
          to={{ pathname: `${routes.movies}/${id}`, state: { from: location } }}
        >
          {title}
        </Link>
      </li>
    ))}
  </ul>
);

export default withRouter(MovieList);
