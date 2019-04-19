import React, {Component} from 'react';
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import {
  BrowserRouter as Router, Route, Switch,
  Redirect
} from 'react-router-dom'
import {IntlProvider} from 'react-intl-redux'

import rootRoutes from '@routes/index';
import createStore from '@store/createStore'
import PageHeaderContainer from "@shared/containers/PageHeader/PageHeaderContainer";
import SettingPanelContainer from "@shared/containers/SettingPanel/SettingPanelContainer";
import Preloader from "@shared/ui/Preloader/Preloader";
import ModalBoxDispatcher from "@shared/containers/ModalBox/ModalBoxDispatcher";

import './Main.scss'


const store = createStore(window.__INITIAL_STATE__);
const $ROOT_NODE = document.getElementById('app-root');
const routes = rootRoutes(store);


@connect(props => ({
  togglePanel : props.appConfig.togglePanel,
  req: props.request
}))
class Main extends Component {
  render() {
    const { togglePanel, req } = this.props;
    return (
      <div className="app-container">
        {togglePanel? <SettingPanelContainer/> : null}
        {req.isFetching && !req.isFetched ? <Preloader/> : null }
        <ModalBoxDispatcher />
        <Switch>
          {routes.map((route, idx) =>
            <Route
              key={`route-${idx}`}
              exact={route.exact}
              path={route.path}
              component={route.component}/>
          )}

          <Route render={() => <Redirect to={'/movies'} />} />
        </Switch>
      </div>
    )
  }
}

render((
  <Provider store={store}>
    <Router>
      <IntlProvider key={store.getState().intl.locale}>
        <Main/>
      </IntlProvider>
    </Router>
  </Provider>
), $ROOT_NODE);
