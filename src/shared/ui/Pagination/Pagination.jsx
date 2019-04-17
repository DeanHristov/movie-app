import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FormattedMessage} from "react-intl";
import {
  faStepForward, faStepBackward
} from "@fortawesome/free-solid-svg-icons";


import './Pagination.scss';

export default class Pagination extends Component {
  buttonPrev () {
    const { gotoPrev, context } = this.props;
    const isDisabled = context.current === 1;

    return (
      <button
        className={isDisabled ? 'btn btn-pagination disabled' : 'btn btn-pagination' }
        onClick={gotoPrev}>
        <FontAwesomeIcon icon={faStepBackward} size={'1x'} color={'#fff'}/>
        <FormattedMessage id={'app:pagination:btn:prev'} values={{
          page: isDisabled ? null : context.current - 1
        }}/>
      </button>
    )
  }

  buttonNext () {
    const { gotoNext, context } = this.props;
    const isDisabled = context.current === context.total;

    return (
      <button
        className={isDisabled ? 'btn btn-pagination disabled' : 'btn btn-pagination' }
        onClick={gotoNext} >
        <FontAwesomeIcon icon={faStepForward} size={'1x'} color={'#fff'}/>
        <FormattedMessage id={'app:pagination:btn:next'} values={{
          page: isDisabled ? null : context.current + 1,
          total: context.total
        }} />
      </button>
    )
  }

  render() {
    return (
      <div className={'pagination-container flex-row'}>
        {this.buttonPrev()}
        {this.buttonNext()}
      </div>
    )
  }
}
