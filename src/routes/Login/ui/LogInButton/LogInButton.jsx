import React, {useState} from 'react'
import {FormattedMessage} from "react-intl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

import './LogInButton.scss';
export default ({ onClick }) => (
  <a href={'javascript:void(0)'} className={'sign-in-button'} onClick={onClick}>
    <FontAwesomeIcon icon={faSignInAlt}/>
    <FormattedMessage id={'app:login:btn:title'} />
  </a>
)
