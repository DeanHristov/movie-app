import React, { Component } from 'react'
import { connect } from 'react-redux'

import MoviePlayer from "@routes/Movies/ui/MoviePlayer/MoviePlayer";
import {GET_TV_TRAILER_SUCCESS} from "@store/actions/movieActions";

@connect(props => ({
  config: props.appConfig
}))
export default class ModalBoxDispatcher extends Component {

  static displayName = 'ModalBoxDispatcher';

  render () {
    const { modalBox, youtubePlayer } = this.props.config;

    return (
      <div className={'modal-box-wrapper'}>
        {modalBox.isShow && modalBox.type === GET_TV_TRAILER_SUCCESS
          ? <MoviePlayer {...youtubePlayer} /> : null}
        {modalBox.isShow && modalBox.type.lastIndexOf('FAILURE')
          ? <MoviePlayer {...youtubePlayer} /> : null}

      </div>
    )
  }
}
