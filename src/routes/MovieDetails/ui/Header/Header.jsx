import React from 'react'

import './Header.scss'
export default ({homepage, title}) => (
  <header className={'mv-details-title'}>
    <a href={homepage} target={'_blank'}>
      {title}
    </a>
  </header>
)
