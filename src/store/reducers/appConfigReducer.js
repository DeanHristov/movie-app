import {appConfigState} from "@constants/initialAppState";
import {
  ON_TOGGLE_PANEL, ON_TOGGLE_MENU, ON_TOGGLE_SEARCH_FORM, ON_TOGGLE_MODAL_BOX,
} from "@store/actions/appConfigActions";
import {GET_TV_TRAILER_REQUEST, GET_TV_TRAILER_SUCCESS} from "@store/actions/movieActions";

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
  }

  return state;
}
