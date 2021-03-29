import React, { Component } from 'react';
import { fetchMovieActors } from '../../services/api';
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

    try {
      const actors = await fetchMovieActors(movieId);
      this.setState({ actors });
    } catch (error) {
      console.log(error); // замінити на нотифікацію
    }

    this.setState({ isLoading: false });
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
