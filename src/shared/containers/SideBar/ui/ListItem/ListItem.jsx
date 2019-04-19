import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import './ListItem.scss'
import {FormattedMessage} from "react-intl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVideo} from "@fortawesome/free-solid-svg-icons";

export default class ListItem extends Component {
  render() {
    const {title, path} = this.props;
    return (
      <li className="nav-list-item flex-row">
        <span>
          <FontAwesomeIcon icon={faVideo} color={'#999'} />
        </span>
        <NavLink activeClassName={'active'} to={path}>
          <FormattedMessage id={`app:nav:title:${title}`} />
        </NavLink>
      </li>
    )
  }
}
