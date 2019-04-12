import { settingPanelState } from '@constants/initialAppState'
import {ON_TOGGLE_PANEL} from "@store/actions/settingPanelActions";

export default (state = settingPanelState, action) => {

  switch (action.type) {
    case ON_TOGGLE_PANEL: {
      return {
        ...state,
        togglePanel: action.payload
      }
    }
  }

  return state;
}


