import React, {Component} from 'react'

import './HeaderContainer.scss';
import MenuButtonItem from "../../ui/MenuButton/MenuButtonItem";
import SearchField from "../../ui/Search/SearchField";
import LogOutButton from "../../ui/LogOutButton/LogOutButton";
export default class HeaderContainer extends Component {
  render() {
    return (
      <div className="header-container" >
        <MenuButtonItem/>
        {/*<SearchField/>*/}
        {/*<LogOutButton/>*/}
      </div>
    )
  }
}
