import React, {Component} from 'react'
import './MoviePlayer.scss'
import ModalBoxContainer from "@shared/containers/ModalBox/ModalBoxContainer";
import {connect} from "react-redux";

@connect(props => ({
  config: props.appConfig,
  movies: props.movies.movies
}))
export default class MoviePlayer extends Component {

  render() {
    const { movies = { results: []}, config } = this.props;
    const { youtubePlayer } = config;
    const lastRecord = youtubePlayer.urlKeys[youtubePlayer.urlKeys.length - 1];
    const urlToTrailer = `https://www.youtube.com/embed/${lastRecord}?autoplay=${youtubePlayer.autoplay}`
    const title = movies.results
        .find(item => item.id === youtubePlayer.movieId).title;


    console.log(urlToTrailer);
    return (
        <ModalBoxContainer title={title}>
          <iframe
            className={'youtube-player'}
            type={'text/html'}
            src={urlToTrailer}
            frameBorder={'0'} />
        </ModalBoxContainer>
    )
  }
}
