import {updateIntl} from "react-intl-redux";

import {LOCAL_STORAGE} from '@constants/initialAppState'
import LocaleLoader from "@constants/LocaleLoader";

export default (locale) => dispatch => {
  localStorage.setItem(LOCAL_STORAGE.LOCALE, locale);

  dispatch(updateIntl({
    locale,
    messages: LocaleLoader(locale)
  }))
}
