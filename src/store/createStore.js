import {applyMiddleware, compose, createStore as reduxStore} from 'redux'
import {routerMiddleware} from 'connected-react-router'

import reduxThunk from 'redux-thunk'
import reduxLogger from 'redux-logger'


import rootReducer from './reducers'

export default (initialState = {}, history) => {
  const enhancers = [];
  const middlewares = [
    reduxThunk,
    routerMiddleware(history)
  ];

  if (__DEV__) {
    middlewares.push(reduxLogger);
  }

  if (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  return reduxStore(
    rootReducer(history),
    initialState,
    compose(
      applyMiddleware(...middlewares),
      ...enhancers
    )
  )
}
