import React, {Component} from 'react'
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { togglePanel } from '@store/actions/settingPanelActions';
import './SettingPanelContainer.scss';
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

@connect(null, dispatch => ({
  onDestroy : state => dispatch(togglePanel(state))
}))

export default class SettingPanelContainer extends Component {
  onclick () {
    this.props.onDestroy()
  }
  render() {
    return (
      <div className={'setting-panel-overlay'}>
        <span className={'icon'} onClick={::this.onclick}>
           <FontAwesomeIcon icon={faTimes}/>
        </span>


      </div>
    )
  }
}
