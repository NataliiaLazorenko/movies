import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import apiService from '../../services/api';
import Container from '../Container';
import defaultPhoto from './defaultPhoto.jpg';

class MovieActors extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const actors = await apiService.fetchMovieActors(movieId);

    this.setState({ actors });
  }

  render() {
    const { actors } = this.state;

    return (
      <section className="actors">
        <Container>
          <ul>
            {actors.map(({ profile_path, name, character, id }) => (
              <li key={id}>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <img src={defaultPhoto} alt="not available" width="200" />
                )}
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    );
  }
}

// MovieActors.defaultProps = {
//   actors: {
//     profile_path: defaultPhoto,
//   },
// };

// MovieActors.propTypes = {
//   actors: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       profile_path: PropTypes.string,
//       name: PropTypes.string.isRequired,
//       character: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };

export default MovieActors;
