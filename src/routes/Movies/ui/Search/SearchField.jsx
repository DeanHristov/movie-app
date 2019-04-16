import React, {Component} from 'react'

import './SearchField.scss';
export default class SearchField extends Component {
  render() {
    return (
      <div className={'search-field-item'} >
        <input type="text" name={'search-movie'} id={'search-movie'} maxLength={200} minLength={4}/>
      </div>
    )
  }
}
