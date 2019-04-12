import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './SettingItem.scss'
import {faCogs} from "@fortawesome/free-solid-svg-icons/faCogs";
import {FormattedMessage} from "react-intl";

export default class SettingItem extends Component {
  render() {
    return (
      <li className={'nav-list-item flex-row setting'}>
        <span>
          <FontAwesomeIcon icon={faCogs} color={'#999'} />
        </span>
        <NavLink activeClassName={'active'} to={''}>
          <FormattedMessage id={'app:nav:title:settings'} />
        </NavLink>
      </li>
    )
  }
}
