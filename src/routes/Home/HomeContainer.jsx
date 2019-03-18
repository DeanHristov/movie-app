import React, {Component} from 'react'

import './HomeContainer.scss';
import SideBarContainer from "./containers/SideBar/SideBarContainer";
import MainBarContainer from "./containers/MainBar/MainBarContainer";
export default class HomeContainer extends Component {
  render() {
    return (
      <div className={'home-container'} >
        <SideBarContainer/>
        <MainBarContainer/>
      </div>
    )
  }
}


