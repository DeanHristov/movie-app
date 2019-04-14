import HomeContainer from './Home/HomeContainer';
import LoginContainer from './Login/LoginContainer';
import TVShowsContainer from "./TVShows/TVShowsContainer";

import {urlRoutes} from '@constants/initialAppState'



const mapComponentToRoute = {
  home: HomeContainer,
  login: LoginContainer,
  ['tv-shows']: TVShowsContainer
}
export default (store) => urlRoutes.map(item => ({
  path: item.path,
  component: mapComponentToRoute[item.title],
  exact: item.path === '/' ? true : null,
  title: item.title
}));






