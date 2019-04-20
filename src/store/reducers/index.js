import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import appConfigReducer from "@store/reducers/appConfigReducer";
import movieReducer from "@store/reducers/movieReducer";
import userReducer from "@store/reducers/userReducer";
import requestReducer from "@store/reducers/requestReducer";
import intlReducer from "@store/reducers/intlReducer";

export default (history) => combineReducers({
    movies: movieReducer,
    user: userReducer,
    router: connectRouter(history),
    intl: intlReducer,
    request: requestReducer,
    appConfig: appConfigReducer
})
