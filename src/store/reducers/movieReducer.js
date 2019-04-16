import { moviesState } from '@constants/initialAppState'
import {
  FETCH_MOVIES_SUCCESS, FETCH_TV_SHOWS_SUCCESS,
  ON_RESET_MOVIES, SEARCH_TV_ITEM_SUCCESS,

} from "@store/actions/movieActions";
import {ON_TOGGLE_SEARCH_FORM} from "@store/actions/appConfigActions";

export default (state = moviesState, action) => {

    switch (action.type) {
      case SEARCH_TV_ITEM_SUCCESS: {
        return {
          ...state,
          oldMovies: state.movies,
          movies: action.payload
        }
      }
      case ON_RESET_MOVIES:
      case ON_TOGGLE_SEARCH_FORM: {
        if (!action.payload && Object.values(state.oldMovies).length) {
          return {
            ...state,
            movies: state.oldMovies
          }
        }

        return state;
      }
      case FETCH_MOVIES_SUCCESS: {
        return {
          ...state,
          movies: action.payload
        }
      }

      case FETCH_TV_SHOWS_SUCCESS: {
        return {
          ...state,
          tvShows: action.payload
        }
      }
    }

    return state;
}
