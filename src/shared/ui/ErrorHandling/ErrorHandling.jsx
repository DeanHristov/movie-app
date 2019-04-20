import React, { useState, useEffect } from 'react'
import ModalBoxContainer from "../../containers/ModalBox/ModalBoxContainer";

import './ErrorHandling.scss'
export default ({ statusCode, message, type }) => (
  <ModalBoxContainer type={type} title={`Error code: ${statusCode}!`}>
    <p className={'message'}>
      {message}
    </p>
  </ModalBoxContainer>
)
