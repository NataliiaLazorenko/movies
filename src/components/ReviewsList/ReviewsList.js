import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReviewsList.module.css';

const ReviewsList = ({ reviews }) => (
  <ul>
    {reviews.map(({ id, author, content }) => (
      <li key={id} className={styles.reviewsList}>
        <h3>Author: {author}</h3>
        <p>{content}</p>
      </li>
    ))}
  </ul>
);

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ReviewsList;
