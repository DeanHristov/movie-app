import {appConfigState} from "@constants/initialAppState";
import {
  ON_TOGGLE_PANEL, ON_TOGGLE_MENU, ON_TOGGLE_SEARCH_FORM,
} from "@store/actions/appConfigActions";

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
  }

  return state;
}
