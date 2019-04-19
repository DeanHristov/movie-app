import React, { useState, useEffect } from 'react'
import {FormattedMessage} from "react-intl";
import {faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './Header.scss'

export default ({isVisibleSearchForm, onClick}) => (
  <header className={'movies-header flex-row'}>
    <FormattedMessage id={'app:movies:page:title'}/>
    <FontAwesomeIcon
      className={'search-icon'}
      icon={isVisibleSearchForm ? faTimes : faSearch}
      size={'1x'}
      color={'#bbb'}
      onClick={onClick}/>
  </header>
)
