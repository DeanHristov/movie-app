import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import './LogOutButton.scss';
export default class LogOutButton extends Component {
  render() {
    return (
     <span className={'logout-button'}>
       <FontAwesomeIcon icon={faSignOutAlt}/>
     </span>
    )
  }
}
