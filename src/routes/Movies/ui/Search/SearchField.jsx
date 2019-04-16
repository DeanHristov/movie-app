import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FormattedMessage} from "react-intl";
import {connect} from "react-redux";


import './SearchField.scss';

@connect(props => ({
  isVisible: props.appConfig.toggleSearchField
}))
export default class SearchField extends Component {
  render() {
    const { isVisible } = this.props;

    return (
      <div className={isVisible ? 'search-field-item flex-row on-show' : 'search-field-item flex-row' }>
        <FormattedMessage id={'app:search:placeholder:title'}>
          {messageText =>  (
            <input
              type="text"
              name={'search-movie'}
              id={'search-movie'}
              maxLength={250}
              minLength={4}
              placeholder={messageText}
            />
          )}
        </FormattedMessage>
        <FontAwesomeIcon icon={faSearch} size={'1x'} color={'#bbb'}/>
      </div>
    )
  }
}
