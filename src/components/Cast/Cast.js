import React, { Component } from 'react';
import apiService from '../../services/api';
import Container from '../Container';
import Spinner from '../Spinner';
import ActorsList from '../../components/ActorsList';

class MovieActors extends Component {
  state = {
    actors: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const { movieId } = this.props.match.params;
    const actors = await apiService.fetchMovieActors(movieId);

    this.setState({ actors, isLoading: false });
  }

  render() {
    const { actors, isLoading } = this.state;

    return (
      <section className="actors">
        <Container>
          {isLoading && <Spinner />}
          <ActorsList actors={actors} />
        </Container>
      </section>
    );
  }
}

export default MovieActors;
