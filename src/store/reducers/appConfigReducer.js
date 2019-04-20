import {appConfigState} from "@constants/initialAppState";
import {
  ON_TOGGLE_PANEL, ON_TOGGLE_MENU,
  ON_TOGGLE_SEARCH_FORM, ON_TOGGLE_MODAL_BOX,
  ON_RESET_PLAYER_BOX,
} from "@store/actions/appConfigActions";
import {
  GET_TV_TRAILER_REQUEST,
  GET_TV_TRAILER_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_TV_SHOWS_FAILURE,
  GET_MOVIE_BY_ID_FAILURE,
  GET_TV_TRAILER_FAILURE,
  SEARCH_TV_ITEM_FAILURE
} from "@store/actions/movieActions";

export default (state = appConfigState, action) => {
  switch (action.type) {
    case ON_TOGGLE_PANEL: {
      return {
        ...state,
        togglePanel: action.payload
      }
    }
    case ON_TOGGLE_MENU: {
      return {
        ...state,
        toggleMenu: action.payload
      }
    }
    case ON_TOGGLE_SEARCH_FORM: {
      return {
        ...state,
        toggleSearchField: action.payload
      }
    }
    case GET_TV_TRAILER_REQUEST: {
      return {
        ...state,
        modalBox: appConfigState.modalBox,
        youtubePlayer: appConfigState.youtubePlayer
      }
    }
    case ON_TOGGLE_MODAL_BOX: {
      return {
        ...state,
        modalBox: action.payload
      }
    }
    case GET_TV_TRAILER_SUCCESS: {
      const {
        results, autoplay, movieId,
        width, height
      } = action.payload;

      return {
        ...state,
        youtubePlayer: {
          ...state.youtubePlayer,
          urlKeys: results.map(item => item.key),
          autoplay,
          movieId,
          width,
          height
        },
        modalBox: {
          isShow: true,
          type: GET_TV_TRAILER_SUCCESS
        }
      }
    }

    case ON_RESET_PLAYER_BOX: {
      return {
        ...state,
        modalBox: {
          isShow: false,
          type: null
        },
        youtubePlayer: {
          urlKeys: [],
          autoplay: 0
        }
      }
    }
    case FETCH_MOVIES_FAILURE:
    case SEARCH_TV_ITEM_FAILURE:
    case GET_TV_TRAILER_FAILURE:
    case FETCH_TV_SHOWS_FAILURE:
    case GET_MOVIE_BY_ID_FAILURE: {
      return {
        ...state,
        modalBox: {
          isShow: true,
          type: action.type
        }
      }
    }
  }

  return state;
}
