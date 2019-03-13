import { applyMiddleware, compose, createStore as reduxStore }from 'redux'

import reduxThunk from 'redux-thunk'
import reduxLogger from 'redux-logger'


import rootReducer from './reducers'

export default (initialState = {}) => {
    const middlewares  = [reduxThunk];
    const enhancers    = [];

    if (__DEV__) {
      middlewares.push(reduxLogger);
    }

  if (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  }
    
    return reduxStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middlewares),
            ...enhancers
        )
    )
}
