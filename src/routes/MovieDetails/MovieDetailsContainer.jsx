import React, { Component } from 'react'
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom'

import PageHeaderContainer from "@shared/containers/PageHeader/PageHeaderContainer";
import {fetchMovieById} from "@store/actions/movieActions";

@connect(props => ({
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

  render() {
    console.log('this.props.movies(): ', this.state.movie)
    return (
      <div className="mv-details-container">
        <PageHeaderContainer/>
        <h3>works...</h3>
      </div>

    )
  }
}


export default withRouter(MovieDetailsContainer)
