import React, {Component} from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faIgloo} from '@fortawesome/free-solid-svg-icons'

import rootRoutes from '@routes/index';
import createStore from '@store/createStore'
import HeaderContainer from "@shared/containers/Header/HeaderContainer";
import './Main.scss'

const store = createStore(window.__INITIAL_STATE__);
const $ROOT_NODE = document.getElementById('app-root')
const routes = rootRoutes(store);

library.add(faIgloo);

class Main extends Component {
  render() {
    return (
      <div className="app-container">
        <HeaderContainer/>
        {routes.map((route, idx) =>
          <Route
            key={`route-${idx}`}
            exact={route.exact}
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
