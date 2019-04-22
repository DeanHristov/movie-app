import React, { Component } from 'react'
import {Route, Redirect} from "react-router-dom";

import auth from '@core/Auth'

export default ({component: Component, ...rest}) => (
  <Route {...rest} render={
    props => (
      auth.isAuthenticate() ? <Component { ...props} /> : <Redirect to={{ pathname: '/login'}} />
    )
  } />
)
