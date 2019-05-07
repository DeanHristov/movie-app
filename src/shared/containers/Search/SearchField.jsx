import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index'
import {faSearch} from "@fortawesome/free-solid-svg-icons/index";
import {FormattedMessage} from "react-intl";
import {connect} from "react-redux";


import {
  fetchPopularTVShows, fetchTopRatedMovies,
  searchTVByQuery
} from "@store/actions/movieActions";
import {deBounce} from "@constants/utils";
import './SearchField.scss';
import {faTimes} from "@fortawesome/free-solid-svg-icons";

@connect(props => ({
  isVisible: props.appConfig.toggleSearchField,
  locale: props.intl.locale
}), dispatch => ({
  searchTVItem: params => dispatch(searchTVByQuery(params)),
  fetchMovies: params => dispatch(fetchTopRatedMovies(params)),
  fetchTVShows: params => dispatch(fetchPopularTVShows(params))
}))
export default class SearchField extends Component {

  state = {
    isTyped: false
  }


  doSearchTVItem() {
    const { locale, context } = this.props;
    const { value } = this.$searchField;

    this.setState({ isTyped: true }, () => this.props.searchTVItem({
      query: value.trim(),
      lang: locale,
      context
    }));

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

  onReset() {
    this.setState({ isTyped: false }, () => {
      this.$searchField.value = null;
      this.props.onReset()
    })
  }

  render() {
    const { isVisible } = this.props;
    const { isTyped } = this.state;

    return (
      <div className={isVisible ? 'search-field-item on-show' : 'search-field-item' }>
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
              onKeyUp={deBounce(::this.doSearchTVItem, 700)}
            />
          )}
        </FormattedMessage>
        <FontAwesomeIcon
          icon={!isTyped ? faSearch : faTimes}
          size={'1x'}
          color={'#bbb'}
          onClick={::this.onReset}
        />
      </div>
    )
  }
}
