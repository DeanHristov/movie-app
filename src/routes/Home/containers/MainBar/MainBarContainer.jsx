import React, {Component} from 'react'

import './MainBarContainer.scss';
import HeaderContainer from "../Header/HeaderContainer";
import MovieViewContainer from "../MovieView/MovieViewContainer";

export default class MainBarContainer extends Component {
  render() {
    return (
      <div className={'main-bar-container'} >
        <HeaderContainer/>
        <MovieViewContainer/>
      </div>
    )
  }
}
