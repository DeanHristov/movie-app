import React, { userState } from "react";

import './TagList.scss'
export default ({ tags = [] }) => {
  return (
    <div className={'mv-details-tag-list slide-up-in-3x'}>
      {tags.map(({ name, id }) =>
        <span key={id} className={'tag-title'} >{name}</span>
      )}
    </div>
  )
}
