import React, { Component } from 'react'
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom'

import PageHeaderContainer from "@shared/containers/PageHeader/PageHeaderContainer";
import {fetchMovieById} from "@store/actions/movieActions";
import PlayerContainer from "./containers/PlayerContainer";
import TagList from "./ui/Tags/TagList";
import Header from "./ui/Header/Header";
import './MovieDetailsContainer.scss'

@connect(props => ({
  movies: props.movies.movies,
  movieDetails: props.movies.movieDetails,
  lang: props.intl.locale
}), dispatch => ({
  getMovie: (movieId) => dispatch(fetchMovieById(movieId))
}))
class MovieDetailsContainer extends Component {
  state = {
    movie: {}
  }

  componentDidMount() {
    const { lang, match: { params }} = this.props;

    this.props.getMovie({
      lang,
      movieId: parseInt(params.movieId)
    });
  }

  componentWillReceiveProps( { movieDetails } ) {
    this.setState({ movie: movieDetails })
  }

  render() {
    const { lang, match: { params } } = this.props;
    const { movie: { title, overview, genres, vote_count, homepage} } = this.state;
    const movieDetails = {
      lang,
      votes: vote_count,
      movieId: parseInt(params.movieId)
    };

    return (
      <div className="mv-details-container">
        <Header {...{title, homepage}} />
        <PlayerContainer {...movieDetails} />
        <TagList tags={genres} />
        <p className={'mv-details-overview'}>{overview}</p>
        <PageHeaderContainer/>
      </div>

    )
  }
}


export default withRouter(MovieDetailsContainer)
