import React, {Component} from 'react'
import {connect} from 'react-redux'

import Brand from "@shared/ui/Brand/Brand";
import {toggleMenu} from '@store/actions/appConfigActions'
import { urlRoutes } from '@constants/initialAppState'
import './SideBarContainer.scss';
import ListItem from "./ui/ListItem/ListItem";
import SettingItem from "./ui/SettingItem/SettingItem";

@connect(props => ({
  isShow: props.appConfig.toggleMenu
}), dispatch => ({
  changeTo: newState => dispatch(toggleMenu(newState))
}))

export default class SideBarContainer extends Component {

  constructor(props) {
    super(props);
    this.$myRef = React.createRef()
  }

  componentDidMount() {
    window.addEventListener('resize', ::this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', ::this.onResize)
  }

  componentWillReceiveProps({ isShow }) {
    if (isShow)
      document.body.classList.add('on-overlay')
    else
      document.body.classList.remove('on-overlay')
  }

  onResize () {
    const {innerWidth} = window;

    if (innerWidth >= 768) {
      this.props.changeTo(false)
    }
  }

  render() {
    const {isShow} = this.props;

    return (
      <div ref={this.$myRef}
           className={isShow ? 'side-bar-container on-show' : 'side-bar-container'}>
        <Brand/>
        <ul>
          {urlRoutes.filter(item => item.isUsage).map((item, idx) =>
            <ListItem key={`nav-item-${idx}`} title={item.title} path={item.path} />
          )}
          <SettingItem />
        </ul>
      </div>
    )
  }
}
