import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {
  faArrowRight, faStar, faStarHalfAlt
} from "@fortawesome/free-solid-svg-icons";
import './MovieReting.scss'

export default ({movieId}) => (
  <div className={'stars-view'}>
    <FontAwesomeIcon icon={faStar} color={'#fff'}/>
    <FontAwesomeIcon icon={faStar} color={'#fff'}/>
    <FontAwesomeIcon icon={faStar} color={'#fff'}/>
    <FontAwesomeIcon icon={faStar} color={'#fff'}/>
    <FontAwesomeIcon icon={faStarHalfAlt} color={'#fff'}/>
    <Link to={`/movie/${movieId}`} className={'link-btn'}>
      <FontAwesomeIcon icon={faArrowRight}/>
    </Link>
  </div>
)
