import React, {Component} from 'react'

import './LoginContainer.scss';
import LogInButton from "./ui/LogInButton/LogInButton";

export default class LoginContainer extends Component {
  render() {
    return (
      <div id={'login-container'}>
        <LogInButton/>
      </div>
    )
  }
}
