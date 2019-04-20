import React, { Component } from 'react'
import {connect} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";

import {getTVTrailer} from "@store/actions/movieActions";
import Player from '../ui/Player/Player'
import './PlayerContainer.scss'

@connect(props => ({
  youtubePlayer: props.appConfig.youtubePlayer
}), dispatch => ({

  getTrailer: params => dispatch(getTVTrailer(params))
}))
export default class PlayerContainer extends Component{

  componentDidMount() {
    const { movieId, lang } = this.props;

    this.props.getTrailer({
      movieId,
      lang,
      autoplay: 0
    })
  }



  render () {
    const { youtubePlayer, votes } = this.props;
    const lastRecord = youtubePlayer.urlKeys[youtubePlayer.urlKeys.length - 1];

    return (
      <div className={'mv-details-player-container slide-up-in-2x'} >
        <div className={'player-container'}>
          {lastRecord ? (
            <Player path={`https://www.youtube.com/embed/${lastRecord}?autoplay=${youtubePlayer.autoplay}&fs=1&amp;`}/>
          ): null}
        </div>
        <div className={'movie-rating flex-row'}>
          <div className={'stars'}>
            <FontAwesomeIcon icon={faStar} color={'#fff'} />
            <FontAwesomeIcon icon={faStar} color={'#fff'} />
            <FontAwesomeIcon icon={faStar} color={'#fff'} />
            <FontAwesomeIcon icon={faStar} color={'#fff'} />
            <FontAwesomeIcon icon={faStarHalfAlt} color={'#fff'} />
          </div>
          <span className={'votes'}>{ votes } </span>
        </div>
      </div>
    )
  }
}
