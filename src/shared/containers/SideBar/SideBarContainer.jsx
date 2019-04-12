import React, {Component} from 'react'
import {connect} from 'react-redux'

import Brand from "@shared/ui/Brand/Brand";
import {toggleMenu} from '@store/actions/toggleMenuAction'
import './SideBarContainer.scss';

@connect(props => ({
  isShow: props.menu.toggleMenu
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
      </div>
    )
  }
}
