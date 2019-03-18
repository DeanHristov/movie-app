import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
    
import './MenuButtonItem.scss';
export default class MenuButtonItem extends Component {
  render() {
    return (
      <span className={'menu-button-item'} >
        <FontAwesomeIcon icon={faBars}/>
      </span>
    )
  }
}
