import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Brand.scss'
import {faVideo} from "@fortawesome/free-solid-svg-icons";


export default () => {
  const [ title ] = useState('Movie App');

  return (
    <div className="brand-container">
      <FontAwesomeIcon icon={faVideo} size="4x" color={'#ff0000'}/>
      <h2 className="brand-title"> {title}</h2>
    </div>
  )
}
