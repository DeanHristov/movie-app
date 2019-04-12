import React, {Component} from 'react'
import {connect} from "react-redux";
import {FormattedMessage} from "react-intl";

import changeLanguage from "@store/actions/intlActions";
import './LanguagePanel.scss'

@connect(props => ({
  languages: props.intl.languages,
  locale: props.intl.locale
}), dispatch => ({
  changeLanguage: newLocale => dispatch(changeLanguage(newLocale))
}))
export default class LanguagePanel extends Component {

  changeLanguage (key) {
    this.props.changeLanguage(key)
  }
  render() {
    const { languages, locale } = this.props;

    return (
      <div className="language">
        {languages.map((item, key) =>
          <a href={'javascript:void(0)'} key={`lang-btn-${key}`} onClick={this.changeLanguage.bind(this, item)}
                  className={locale === item ? `lang-btn btn-${key} active`: `lang-btn btn-${key}`}>
            <FormattedMessage id={`app:nav:languages:${item}`} />
          </a>
        )}
      </div>
    )
  }
}
