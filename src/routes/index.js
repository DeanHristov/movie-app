import MoviesContainer from './Movies/MoviesContainer';
import LoginContainer from './Login/LoginContainer';

import {urlRoutes} from '@constants/initialAppState'



const mapComponentToRoute = {
  home: MoviesContainer,
  login: LoginContainer
}
export default (store) => urlRoutes.map(item => ({
  path: item.path,
  component: mapComponentToRoute[item.title],
  exact: item.path === '/' ? true : null,
  title: item.title
}));




const routes = [
  {path: '/', exact: true, components: [], routes: [

    ]}
]

