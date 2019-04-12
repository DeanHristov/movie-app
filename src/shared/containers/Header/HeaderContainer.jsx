import React, {Component} from 'react'

import SideBarContainer from "@shared/containers/SideBar/SideBarContainer";
import MobileHeader from "@shared/containers/MobileHeader/MobileHeader";

import './HeaderContainer.scss';
export default class HeaderContainer extends Component {
  render() {
    return (
      <header className="header-container">
        <MobileHeader />
        <SideBarContainer />
      </header>
    )
  }
}
