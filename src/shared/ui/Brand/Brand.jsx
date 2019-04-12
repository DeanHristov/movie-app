import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Brand.scss'
import {faFilm} from "@fortawesome/free-solid-svg-icons/faFilm";

export default class Brand extends Component {
  state = {
    title: 'Movie App'
  }

  render() {
    const {title} = this.state;
    return (
      <div className="brand-container">
        <FontAwesomeIcon icon={faFilm} size="6x" color={'#2a2b30'}/>
        <h2 className="brand-title text-center text-bold-italic"> {title}</h2>
      </div>
    )
  }
}
