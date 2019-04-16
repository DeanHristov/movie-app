import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FormattedMessage} from "react-intl";
import {connect} from "react-redux";


import {
  fetchPopularTVShows, fetchTopRatedMovies,
  searchTVByQuery
} from "@store/actions/movieActions";
import {deBounce} from "@constants/utils";
import './SearchField.scss';

@connect(props => ({
  isVisible: props.appConfig.toggleSearchField,
  locale: props.intl.locale
}), dispatch => ({
  searchTVItem: params => dispatch(searchTVByQuery(params)),
  fetchMovies: params => dispatch(fetchTopRatedMovies(params)),
  fetchTVShows: params => dispatch(fetchPopularTVShows(params))
}))
export default class SearchField extends Component {

  doSearchTVItem() {
    const { locale, context } = this.props;
    const { value } = this.$searchField;

    this.props.searchTVItem({
      query: value.trim(),
      lang: locale,
      context
    });

    if (!value.trim()) this.doReset()

  }

  doReset () {
    const { context, locale } = this.props;
    switch (context) {
      case 'movie': {
        this.props.fetchMovies({
          lang: locale
        })
      }
      case 'tv': {
        this.props.fetchMovies({
          lang: locale
        })
      }
    }
  }

  render() {
    const { isVisible, context } = this.props;

    return (
      <div className={isVisible ? 'search-field-item flex-row on-show' : 'search-field-item flex-row' }>
        <FormattedMessage id={'app:search:placeholder:title'}>
          {messageText =>  (
            <input
              ref={node => this.$searchField = node}
              type="text"
              name={'search-movie'}
              id={'search-movie'}
              maxLength={250}
              minLength={4}
              placeholder={messageText}
              onKeyUp={deBounce(::this.doSearchTVItem, 1500)}
            />
          )}
        </FormattedMessage>
        <FontAwesomeIcon icon={faSearch} size={'1x'} color={'#bbb'}/>
      </div>
    )
  }
}
