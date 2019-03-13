import HomeContainer from './Home/containers/HomeContainer';
import LoginContainer from './Login/containers/LoginContainer';

import {urlRoutes} from '@constants/initialAppState'

export default (store) => [{
  path: urlRoutes.LOGIN_URL,
  component: LoginContainer
}, {
  path: urlRoutes.HOME_URL,
  component: HomeContainer
}];



