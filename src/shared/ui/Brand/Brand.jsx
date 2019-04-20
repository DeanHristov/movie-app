import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Brand.scss'
import {faVideo} from "@fortawesome/free-solid-svg-icons";

export default class Brand extends Component {
  state = {
    title: 'Movie App'
  }

  render() {
    const {title} = this.state;
    return (
      <div className="brand-container">
        <FontAwesomeIcon icon={faVideo} size="4x" color={'#ff0000'}/>
        <h2 className="brand-title text-center text-bold-italic"> {title}</h2>
      </div>
    )
  }
}
