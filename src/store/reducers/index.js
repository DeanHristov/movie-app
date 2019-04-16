import { combineReducers } from 'redux'

import appConfigReducer from "@store/reducers/appConfigReducer";
import movieReducer from "@store/reducers/movieReducer";
import userReducer from "@store/reducers/userReducer";
import locationReducer from "@store/reducers/locationReducer";
import requestReducer from "@store/reducers/requestReducer";
import intlReducer from "@store/reducers/intlReducer";

export default combineReducers({
    movies: movieReducer,
    user: userReducer,
    location: locationReducer,
    intl: intlReducer,
    request: requestReducer,
    appConfig: appConfigReducer
})
