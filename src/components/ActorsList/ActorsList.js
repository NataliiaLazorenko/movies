import React from 'react';
import PropTypes from 'prop-types';
import defaultPhoto from './defaultPhoto.jpg';
import styles from './ActorsList.module.css';

const ActorsList = ({ actors }) => (
  <ul className={styles.actorsList}>
    {actors.map(({ profile_path, name, character, id }) => (
      <li key={id} className={styles.actorCard}>
        {profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${profile_path}`}
            alt={name}
          />
        ) : (
          <img src={defaultPhoto} alt="not available" width="200" />
        )}
        <div className={styles.actorDetails}>
          <h3 className={styles.actorName}>{name}</h3>
          <p className={styles.actorCharacter}>Character: {character}</p>
        </div>
      </li>
    ))}
  </ul>
);

ActorsList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ActorsList;
