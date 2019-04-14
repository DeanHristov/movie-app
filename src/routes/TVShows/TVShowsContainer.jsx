import React, {Component} from 'react'
import {connect} from "react-redux";

import { fetchPopularTVShows } from '@store/actions/movieActions'
import './TVShowsContainer.scss';

@connect(props => ({
  lang: props.intl.locale,
  tvShows: props.movies.tvShows
}), dispatch => ({
  fetchTVShows: (params) => dispatch(fetchPopularTVShows(params))
}))
export default class TVShowsContainer extends Component {
  state = {
    tvShows: {}
  };

  componentDidMount() {
    const { lang } = this.props;
    this.props.fetchTVShows({
      lang
    })
  }

  componentWillReceiveProps({ tvShows }) {
    this.setState({ tvShows })
  }


  render() {
    return (
      <div id={'tv-shows-container'} />
    )
  }
}
