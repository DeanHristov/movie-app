import { updateIntl } from "react-intl-redux";
import {LOCAL_STORAGE} from '@constants/initialAppState'

export default ({ locale, messages }) => dispatch =>{
  localStorage.setItem(LOCAL_STORAGE.LOCALE, locale)

  dispatch(updateIntl({
    locale,
    messages
  }))
}
