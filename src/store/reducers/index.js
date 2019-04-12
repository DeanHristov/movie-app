import { combineReducers } from 'redux'

import userReducer from './userReducer';
import movieReducer from './movieReducer';
import locationReducer from './locationReducer'
import intlReducer from './intlReducer';
import requestReducer from './requestReducer';
import toggleMenuReducer from "./toggleMenuReducer";
import settingPanelReducer from "./settingPanelReducer";

export default combineReducers({
    movies: movieReducer,
    user: userReducer,
    location: locationReducer,
    intl: intlReducer,
    request: requestReducer,
    menu: toggleMenuReducer,
    settingPanel: settingPanelReducer
})
