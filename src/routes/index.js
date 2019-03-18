import HomeContainer from './Home/HomeContainer';
import LoginContainer from './Login/LoginContainer';

import {urlRoutes} from '@constants/initialAppState'

export default (store) => [{
  path: urlRoutes.LOGIN_URL,
  component: LoginContainer
}, {
  path: urlRoutes.HOME_URL,
  component: HomeContainer,
  exact: true,
}];





