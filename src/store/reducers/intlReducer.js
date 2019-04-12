import { addLocaleData } from "react-intl";
import { intlState } from '@constants/initialAppState'

import * as en from 'react-intl/locale-data/en'
import * as bg from 'react-intl/locale-data/bg'

addLocaleData([
  ...en,
  ...bg
]);

export default (state = intlState, action ) => {
  switch (action.type) {
    case '@@intl/UPDATE': {
      const { locale, messages } = action.payload
      return {
        ...state,
        locale,
        messages
      }
    }
  }

  return state;
}
