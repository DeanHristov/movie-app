import React, {Component} from 'react'
import {faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";

import { fetchTopRatedMovies } from '@store/actions/movieActions';
import { toggleSearchForm } from '@store/actions/appConfigActions';
import MovieCardItem from "@routes/Movies/ui/MovieCard/MovieCardItem";
import {FormattedMessage} from "react-intl";
import './MoviesContainer.scss';
import Pagination from "@shared/ui/Pagination/Pagination";
import SearchField from "@shared/containers/Search/SearchField";


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
    const { movies } = this.props;
    this.props.fetchMovies({
      page: ++movies.page
    })
  }

  gotoPrevPage () {
    const { movies } = this.props;
    this.props.fetchMovies({
      page: --movies.page
    })
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
        <section className={'movie-body slide-up-in'}>
          {movies.results.map((movie, idx) =>
            <MovieCardItem {...movie} key={`movie-item-${idx}`} />
          )}
        </section>
        <footer className={'movie-footer'}>
          <Pagination
            context={{ current: movies.page, total: movies.total_pages }}
            gotoPrev={::this.gotoPrevPage}
            gotoNext={::this.gotoNextPage} />
        </footer>
      </div>
    )
  }
}


