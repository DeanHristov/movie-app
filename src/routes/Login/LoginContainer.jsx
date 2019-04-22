import React, {Component} from 'react'
import LogInButton from "./ui/LogInButton/LogInButton";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom'

import {doLogin} from "@store/actions/userActions";
import auth from '@core/Auth'

import './LoginContainer.scss';

@connect(null, dispatch => ({
  login: params => dispatch(doLogin(params))
}))

class LoginContainer extends Component {

  onLogin () {
    const { history } = this.props;

    auth.login((params) => {
      this.props.login(params)
      history.push('/movies')
    })
  }
  render() {
    return (
      <div id={'login-container'}>
        <LogInButton onClick={::this.onLogin}/>
      </div>
    )
  }
}

export default withRouter(LoginContainer)


