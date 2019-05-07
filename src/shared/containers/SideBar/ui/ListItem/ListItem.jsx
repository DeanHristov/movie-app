import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

import {FormattedMessage} from "react-intl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTv} from "@fortawesome/free-solid-svg-icons";
import './ListItem.scss'

export default ({title, path}) => {
  const [iconMap] = useState({
    ['movies']: faTv
  });

  console.log(title);
  return (
    <li className="nav-list-item">
      <NavLink exact to={path}>
        <span className={`icon icon-${title.replace(' ', '-')}`}>
          <FontAwesomeIcon icon={iconMap[title.replace(' ', '-')]} color={'#999'}/>
        </span>
        <FormattedMessage id={`app:nav:title:${title.replace(' ', '-')}`}/>
      </NavLink>
    </li>
  )
}
