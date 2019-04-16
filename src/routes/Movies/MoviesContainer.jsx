import React, {Component} from 'react'
import {faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";

import { fetchTopRatedMovies } from '@store/actions/movieActions';
import { toggleSearchForm } from '@store/actions/appConfigActions';
import MovieCardItem from "@routes/Movies/ui/MovieCard/MovieCardItem";
import {FormattedMessage} from "react-intl";
import SearchField from "@routes/Movies/ui/Search/SearchField";
import './MoviesContainer.scss';


@connect(props => ({
  lang: props.intl.locale,
  movies: props.movies.movies,
  isVisibleSearchForm: props.appConfig.toggleSearchField
}), dispatch => ({
  fetchMovies: (params) => dispatch(fetchTopRatedMovies(params)),
  toggleSearchForm: visibility => dispatch(toggleSearchForm(visibility))
}))
export default class MoviesContainer extends Component {
  state = {
    movies: {
      page: null,
      results: [],
      total_pages: null,
      total_results: null
    }
  };

  componentDidMount() {
    const { lang } = this.props;

    this.props.fetchMovies({
      lang
    })
  }

  componentWillReceiveProps({ movies }) {
    this.setState({ movies })
  }

  gotoNextPage () {

  }

  gotoPrevPage () {

  }

  onTriggerSearchForm () {
    const { toggleSearchForm,  isVisibleSearchForm} = this.props;

    toggleSearchForm(!isVisibleSearchForm);
  }

  render() {
    const { movies } = this.state;
    const { isVisibleSearchForm } = this.props;

    return (
      <div className={'movies-container'}>
        <header className={'movies-header flex-row'} >
          <FormattedMessage id={'app:movies:page:title'} />
          <FontAwesomeIcon className={'search-icon'}
            icon={isVisibleSearchForm ? faTimes :faSearch}
            size={'1x'}
            color={'#bbb'}
            onClick={::this.onTriggerSearchForm}/>
        </header>
        <SearchField context={'movie'}/>
        <section className={'movie-view slide-up-in'}>
          {movies.results.map((movie, idx) =>
            <MovieCardItem {...movie} key={`movie-item-${idx}`} />
          )}
        </section>
      </div>
    )
  }
}


