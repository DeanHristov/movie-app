import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './MovieCardItem.scss';
import {faArrowRight, faPlay} from "@fortawesome/free-solid-svg-icons/";
import {FormattedMessage} from "react-intl";



export default class MovieCardItem extends Component {

  playTrailer(){
    console.log('clicked...')
  }
  render() {
    const {
      original_title, poster_path,
      vote_count, overview, daley
    } = this.props;

    return (
      <article className={'movie-card-item slide-up-in'}>
        <div className={'movie-card-body'}>
          <a href={'javascript:void(0)'}>
            <img className={'movie-image'} src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={original_title}/>
          </a>
          <div className={'card-title'}>
            <h3 className={'movie-card-title'}>
              {original_title}
            </h3>
            <FormattedMessage id={'app:movies:element:rated'} values={{ count: vote_count }}/>
            <a  href={'/movie/id'} className={'link-btn'}>
              <FontAwesomeIcon icon={faArrowRight}/>
            </a>
          </div>
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
