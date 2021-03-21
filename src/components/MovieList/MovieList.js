import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const MovieList = ({ movies, location }) => (
  <ul>
    {movies.map(({ id, title }) => (
      <li key={id}>
        <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
          {title}
        </Link>
      </li>
    ))}
  </ul>
);

export default withRouter(MovieList);
