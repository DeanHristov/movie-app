import { initMenuState } from '@constants/initialAppState'
import {ON_TOGGLE_MENU} from "@store/actions/toggleMenuAction";

export default (state = initMenuState, action) => {

  switch (action.type) {
    case ON_TOGGLE_MENU: {
      return {
        ...state,
        toggleMenu: action.payload
      }
    }
  }

  return state;
}


