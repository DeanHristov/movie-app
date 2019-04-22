import {credentials, LOCAL_STORAGE} from '@constants/initialAppState'
import {
  ON_USER_LOGIN, ON_USER_LOGOUT
} from "@store/actions/userActions";

export default (state = credentials, action) => {

    switch (action.type) {

      case ON_USER_LOGOUT:
      case ON_USER_LOGIN: {
        return {
          ...state,
          ...action.payload
        };
      }
    }

    return state;
}
