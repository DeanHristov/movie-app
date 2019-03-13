import React, {Component} from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

import rootRoutes from '@routes/index';
import createStore from '@store/createStore'
import {urlRoutes} from '@constants/initialAppState'

const store = createStore(window.__INITIAL_STATE__);
const $ROOT_NODE = document.getElementById('app-root')
const routes = rootRoutes(store);

import '@styles/Main.scss'
class Main extends Component {
  render() {
    return (
      <div className="app-container">
        <ul>
          <li><Link to={urlRoutes.HOME_URL}>Home</Link></li>
          <li><Link to={urlRoutes.LOGIN_URL}>About</Link></li>
        </ul>

        {routes.map((route, idx) =>
          <Route
            key={`route-${idx}`}
            path={route.path}
            component={route.component}/>
        )}
      </div>
    )
  }
}

render((
  <Provider store={store}>
    <Router children={routes}>
      <Main/>
    </Router>
  </Provider>
), $ROOT_NODE);
