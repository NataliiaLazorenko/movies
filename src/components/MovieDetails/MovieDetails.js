import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './defaultImage.png';
import styles from './MovieDetails.module.css';

const MovieDetails = ({ movieDetails }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w300';
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieDetails;

  return (
    <div className={styles.movieDetails}>
      {poster_path ? (
        <img
          src={`${imageBaseUrl}${poster_path}`}
          alt="Movie poster"
          className={styles.moviePoster}
        />
      ) : (
        <img
          src={defaultImage}
          alt="no poster available"
          className={styles.moviePoster}
        />
      )}
      <div>
        <h2>{`${title} (${release_date.split('-')[0]})`}</h2>
        <p>User score: {vote_average * 10} %</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul className={styles.movieGenres}>
          {genres.map(({ name }) => (
            <li key={name} className={styles.movieGenresItem}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MovieDetails.defaultProps = {
  overview: '',
};

MovieDetails.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default MovieDetails;
