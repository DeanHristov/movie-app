import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome/index'
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {connect} from 'react-redux';

import {toggleMenu} from '@store/actions/appConfigActions'
import './MobileHeader.scss'

@connect(props => ({
  toggleMenu: props.appConfig.toggleMenu
}), dispatch => ({
  changeTo: newState => dispatch(toggleMenu(newState))
}))
export default class MobileHeader extends Component {
  state = {
    title: 'Movie App'
  }

  onClick () {
    const { toggleMenu } = this.props;
    this.props.changeTo(!toggleMenu)
  }

  render() {
    const {title} = this.state;
    return (
      <div className={'mobile-container'}>
        <h2 className={'title'}>{title}</h2>
        <a className={'toggle-btn'} onClick={::this.onClick}>
          <FontAwesomeIcon icon={faBars} size="2x" color={'#fff'}/>
        </a>
      </div>
    )
  }
}
