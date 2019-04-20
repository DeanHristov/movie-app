import React, { Component } from 'react'
import { connect } from 'react-redux'
import MoviePlayer from "@routes/Movies/ui/MoviePlayer/MoviePlayer";
import {GET_TV_TRAILER_SUCCESS} from "@store/actions/movieActions";
import ErrorHandling from "../../ui/ErrorHandling/ErrorHandling";

@connect(props => ({
  config: props.appConfig,
  request: props.request,
  pathname: props.router.location.pathname
}))
export default class ModalBoxDispatcher extends Component {

  static displayName = 'ModalBoxDispatcher';

  render () {
    const {
      config: { modalBox, youtubePlayer },
      request: {  status }, pathname
    } = this.props;

    return (
      <div className={'modal-box-wrapper'}>
        {modalBox.isShow && modalBox.type === GET_TV_TRAILER_SUCCESS && pathname === '/movies'
          ? <MoviePlayer {...youtubePlayer} /> : null}
        {modalBox.isShow && modalBox.type.lastIndexOf('FAILURE') > -1
          ? <ErrorHandling  {...status}/> : null}
      </div>
    )
  }
}
