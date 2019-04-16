import { moviesState } from '@constants/initialAppState'
import {
  FETCH_MOVIES_SUCCESS, FETCH_TV_SHOWS_SUCCESS,
  SEARCH_TV_ITEM_SUCCESS,

} from "@store/actions/movieActions";

export default (state = moviesState, action) => {

    switch (action.type) {
      case SEARCH_TV_ITEM_SUCCESS: {
        return {
          ...state,
          movies: action.payload
        }
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
