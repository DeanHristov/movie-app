import React, {Component} from 'react'

import './HomeContainer.scss';
import {connect} from "react-redux";

import { fetchTopRatedMovies } from '@store/actions/movieActions';


@connect(props => ({
  lang: props.intl.locale,
  movies: props.movies.movies
}), dispatch => ({
  fetchMovies: (params) => dispatch(fetchTopRatedMovies(params))
}))
export default class HomeContainer extends Component {

  state = {
    movies: {}
  }

  componentDidMount() {
    const { lang } = this.props;
    this.props.fetchMovies({
      lang
    })
  }

  componentWillReceiveProps({ movies }) {
    this.setState({ movies })
  }

  render() {
    return (
      <div className={'home-container'} />
    )
  }
}


