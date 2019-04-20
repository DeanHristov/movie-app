import React, { userState } from "react";

import './Player.scss'
export default ({ path }) => {
  return (
    <div className={'mv-youtube-player'}>
      <iframe
        className={'youtube-player'}
        type={'text/html'}
        src={path}
        frameBorder={'0'}
        allowFullScreen
      />
    </div>
  )
}
