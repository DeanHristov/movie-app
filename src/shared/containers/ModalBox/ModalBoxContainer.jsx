import React, {Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FormattedMessage} from "react-intl";
import {connect} from "react-redux";

import './ModalBoxContainer.scss';
import {toggleModalBox} from "@store/actions/appConfigActions";

@connect(null, dispatch => ({
  onDestroy: isShow => dispatch(toggleModalBox(isShow))
}))
export default class ModalBoxContainer extends Component {

  render() {
    return (
      <div className={'modal-box-overlay'} ref={ node => this.$overlay = node}>
        <div
          ref={ node => this.$container = node}
          className={'modal-box-container slide-up-fade-in'} >
          <header className={'modal-box-header'} />
          <section className={'modal-box-body'} >
            {this.props.children}
          </section>
          <footer className={'modal-box-footer'}>
            <button
              className={'mb-button-close'}
              onClick={() => this.props.onDestroy()} >
              <FontAwesomeIcon icon={faTimes} size={'1x'} color={'#fff'}/>
              <FormattedMessage id={'app:modal-box:button:close'} />
            </button>
          </footer>
        </div>
      </div>
    )
  }
}
