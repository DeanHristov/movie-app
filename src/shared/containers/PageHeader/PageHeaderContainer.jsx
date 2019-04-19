import React, {Component} from 'react'

import SideBarContainer from "@shared/containers/SideBar/SideBarContainer";
import MobileHeader from "@shared/containers/MobileHeader/MobileHeader";

import './PageHeaderContainer.scss';
export default class PageHeaderContainer extends Component {
  render() {
    return (
      <header className="page-header-container">
        <MobileHeader />
        <SideBarContainer />
      </header>
    )
  }
}
