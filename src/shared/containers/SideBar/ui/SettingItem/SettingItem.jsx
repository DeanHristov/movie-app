import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCogs} from "@fortawesome/free-solid-svg-icons/faCogs";
import {FormattedMessage} from "react-intl";
import {connect} from "react-redux";

import { togglePanel } from '@store/actions/settingPanelActions';
import './SettingItem.scss'

@connect(null, dispatch => ({
  doShowPanell : state => dispatch(togglePanel(state))
}))
export default class SettingItem extends Component {

  onClick () {
    this.props.doShowPanell(true);
  }
  render() {
    return (
      <li className={'nav-list-item flex-row setting'}>
        <span>
          <FontAwesomeIcon icon={faCogs} color={'#999'} />
        </span>
        <a href={'javascript:void(0)'} onClick={::this.onClick} >
          <FormattedMessage id={'app:nav:title:settings'} />
        </a>
      </li>
    )
  }
}
