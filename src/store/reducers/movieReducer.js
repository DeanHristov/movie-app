import { moviesState } from '@constants/initialAppState'
import {
  FETCH_MOVIES_SUCCESS, FETCH_TV_SHOWS_SUCCESS
} from "@store/actions/movieActions";

export default (state = moviesState, action) => {

    switch (action.type) {
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
