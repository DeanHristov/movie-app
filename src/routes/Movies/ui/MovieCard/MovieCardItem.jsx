import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {connect} from "react-redux";
import { faPlay } from "@fortawesome/free-solid-svg-icons/";

import {getTVTrailer} from "@store/actions/movieActions";
import StarsView from '../MovieReting/MovieReting'
import './MovieCardItem.scss';

@connect(props => ({
  lang: props.intl.locale,
  player: props.appConfig.youtubePlayer,
}), dispatch => ({
  onPlayTrailer: params => dispatch(getTVTrailer(params))
}))
export default class MovieCardItem extends Component {

  playTrailer(){
    const { id, lang } = this.props;

    this.props.onPlayTrailer({
      movieId: id,
      autoplay: 1,
      lang
    })
  }
  render() {
    const {
      original_title, poster_path,
      id
    } = this.props;

    return (
      <article className={'movie-card-item slide-up-in'}>
        <div className={'movie-card-body'}>
          <a href={'javascript:void(0)'}>
            <img className={'movie-image'} src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={original_title}/>
          </a>
          <StarsView movieId={id}/>
          <div className={'movie-overview'}>
            <FontAwesomeIcon icon={faPlay} size={'3x'} color={'#fff'} onClick={::this.playTrailer}/>
          </div>
          <button className={'btn btn-normal'}>
            <FontAwesomeIcon icon={faPlay} size={'3x'} color={'#fff'} onClick={::this.playTrailer}/>
          </button>
        </div>
      </article>
    )
  }
}
