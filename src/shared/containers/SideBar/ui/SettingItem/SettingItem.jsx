import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCogs} from "@fortawesome/free-solid-svg-icons/faCogs";
import {FormattedMessage} from "react-intl";
import {connect} from "react-redux";

import { togglePanel } from '@store/actions/appConfigActions';
import '../ListItem/ListItem.scss'

@connect(null, dispatch => ({
  doShowPanel : state => dispatch(togglePanel(state))
}))
export default class SettingItem extends Component {

  onClick () {
    this.props.doShowPanel(true);
  }
  render() {
    return (
      <li className={'nav-list-item'}>
        <a href={'javascript:void(0)'} onClick={::this.onClick} >
        <span>
          <FontAwesomeIcon icon={faCogs} color={'#999'} />
        </span>

          <FormattedMessage id={'app:nav:title:settings'} />
        </a>
      </li>
    )
  }
}
