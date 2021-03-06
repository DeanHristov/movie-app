import MoviesContainer from '@routes/Movies/MoviesContainer';
import LoginContainer from '@routes/Login/LoginContainer';
import MovieDetailsContainer from "@routes/MovieDetails/MovieDetailsContainer";

import {urlRoutes} from '@constants/initialAppState'

// TODO remove it!
const mapComponentToRoute = {
  movies: MoviesContainer,
  details: MovieDetailsContainer,
  login: LoginContainer
}
// TODO Add restriction functionality
export default () => urlRoutes.map(item => ({
  component: mapComponentToRoute[item.title],
  ...item
}));
