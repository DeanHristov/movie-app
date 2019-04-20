import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

import './LogInButton.scss';
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";
export default class LogInButton extends Component {
  render() {
    return (
      <Link className={'sign-in-button slide-up-in'} to={'/'}>
        <FontAwesomeIcon icon={faSignInAlt}/>
        <FormattedMessage id={'app:login:btn:title'} />
      </Link>
    )
  }
}
