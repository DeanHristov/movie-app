import React from 'react'
import {FormattedMessage} from "react-intl";
import {faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './Header.scss'

export default ({isVisible, onClick}) => (
  <header className={'movies-header'}>
    <FormattedMessage id={'app:movies:page:title'}/>
    <FontAwesomeIcon
      className={'search-icon'}
      icon={isVisible ? faTimes : faSearch}
      size={'1x'}
      color={'#bbb'}
      onClick={onClick}/>
  </header>
)
