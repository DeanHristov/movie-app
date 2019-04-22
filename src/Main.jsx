import React, {Component} from 'react';
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import {createBrowserHistory} from 'history'
import {ConnectedRouter} from 'connected-react-router'
import {
  Route, Switch, Redirect
} from 'react-router-dom'
import {IntlProvider} from 'react-intl-redux'

import rootRoutes from '@routes/index';
import createStore from '@store/createStore'
import SettingPanelContainer from "@shared/containers/SettingPanel/SettingPanelContainer";
import Preloader from "@shared/ui/Preloader/Preloader";
import ModalBoxDispatcher from "@shared/containers/ModalBox/ModalBoxDispatcher";
import ProtectedRoute from '@core/ProtectedRoute'
import './Main.scss'


const history = createBrowserHistory();
const store = createStore(window.__INITIAL_STATE__, history);
const $ROOT_NODE = document.getElementById('app-root');
const routes = rootRoutes(store);

@connect(props => ({
  togglePanel: props.appConfig.togglePanel,
  req: props.request
}))
class Main extends Component {

  renderRoutes (route) {
    if (route.isProtected) {
     return (
       <ProtectedRoute
         key={`route-${route.path}`}
         exact={route.exact}
         path={route.path}
         component={route.component}/>
     );
    }

    return (
      <Route
        key={`route-${route.path}`}
        exact={route.exact}
        path={route.path}
        component={route.component} />
    )
  }
  render() {
    const {togglePanel, req} = this.props;
    return (
      <div className="app-container">
        {togglePanel ? <SettingPanelContainer/> : null}
        {req.isFetching && !req.isFetched ? <Preloader/> : null}
        <ModalBoxDispatcher/>
        <Switch>
          {routes.map((route) => this.renderRoutes(route))}
          <Route render={() => <Redirect to={'/movies'}/>}/>
        </Switch>
      </div>
    )
  }
}

render((
  <Provider store={store}>
    <IntlProvider key={store.getState().intl.locale}>
      <ConnectedRouter history={history}>
        <Route path={'/'} component={Main}/>
      </ConnectedRouter>
    </IntlProvider>
  </Provider>
), $ROOT_NODE);

