import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

import './LogInButton.scss';
export default class LogInButton extends Component {
  render() {
    return (
      <button className={'sign-in-button'}>
        <FontAwesomeIcon icon={faSignInAlt}/>
      </button>
    )
  }
}
