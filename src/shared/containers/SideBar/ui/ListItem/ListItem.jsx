import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import './ListItem.scss'
import {FormattedMessage} from "react-intl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faInfo, faSearch, faTv} from "@fortawesome/free-solid-svg-icons";

export default class ListItem extends Component {

  getIcon (type) {
    switch (type) {
      case 'about': {
        return <FontAwesomeIcon icon={faInfo} color={'#999'} />
      }
      case 'home': {
        return <FontAwesomeIcon icon={faHome} color={'#999'} />
      }
      case 'search': {
        return <FontAwesomeIcon icon={faSearch} color={'#999'} />
      }
      case 'tv-shows': {
        return <FontAwesomeIcon icon={faTv} color={'#999'} />
      }
    }
  }

  render() {
    const {title, path} = this.props;
    return (
      <li className="nav-list-item flex-row">
        <span>
          {this.getIcon(title)}
        </span>
        <NavLink activeClassName={'active'} to={path}>
          <FormattedMessage id={`app:nav:title:${title}`} />
        </NavLink>
      </li>
    )
  }
}
