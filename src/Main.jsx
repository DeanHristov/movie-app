import React, {Component} from 'react';
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {IntlProvider} from 'react-intl-redux'

import rootRoutes from '@routes/index';
import createStore from '@store/createStore'
import HeaderContainer from "@shared/containers/Header/HeaderContainer";
import SettingPanelContainer from "@shared/containers/SettingPanel/SettingPanelContainer";
import './Main.scss'


const store = createStore(window.__INITIAL_STATE__);
const $ROOT_NODE = document.getElementById('app-root')
const routes = rootRoutes(store);


@connect(props => ({
  togglePanel : props.settingPanel.togglePanel
}))
class Main extends Component {
  render() {
    const { togglePanel } = this.props;
    return (
      <div className="app-container">
        {togglePanel? <SettingPanelContainer/> : null}
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
      <IntlProvider key={store.getState().intl.locale}>
        <Main/>
      </IntlProvider>
    </Router>
  </Provider>
), $ROOT_NODE);
