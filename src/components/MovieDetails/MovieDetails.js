import React from 'react';
import defaultImage from './defaultImage.png';

const MovieDetails = ({ movieDetails }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w200';
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieDetails;

  return (
    <>
      {poster_path ? (
        <img src={`${imageBaseUrl}${poster_path}`} alt="Movie poster" />
      ) : (
        <img src={defaultImage} alt="no poster available" width="200" />
      )}
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
    </>
  );
};

export default MovieDetails;
