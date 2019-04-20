import React, {Component} from 'react'
import {connect} from "react-redux";
import {
  fetchTopRatedMovies, ON_RESET_MOVIES
} from '@store/actions/movieActions';
import { toggleSearchForm } from '@store/actions/appConfigActions';
import MovieCardItem from "@routes/Movies/ui/MovieCard/MovieCardItem";
import SearchField from "@shared/containers/Search/SearchField";
import PageHeaderContainer from "@shared/containers/PageHeader/PageHeaderContainer";

import Header from './ui/Header/Header'
import Footer from './ui/Footer/Footer'
import './MoviesContainer.scss';

@connect(props => ({
  lang: props.intl.locale,
  movies: props.movies.movies,
  isVisibleSearchForm: props.appConfig.toggleSearchField
}), dispatch => ({
  fetchMovies: (params) => dispatch(fetchTopRatedMovies(params)),
  toggleSearchForm: visibility => dispatch(toggleSearchForm(visibility)),
  doReset: () => dispatch({ type: ON_RESET_MOVIES })
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
    this.setState({
      movies: {
        ...this.state.movies,
        ...movies
      }
    })
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
        <PageHeaderContainer/>
        <Header isVisible={isVisibleSearchForm} onClick={::this.onTriggerSearchForm}/>
        <SearchField onReset={::this.props.doReset} context={'movie'}/>
        <section className={'movie-body'}>
          {movies.results.map((movie, idx) =>
            <MovieCardItem {...movie} key={`movie-item-${idx}`} />
          )}
        </section>
        <Footer
          context={{ current: movies.page, total: movies.total_pages }}
          isVisible={movies.results.length > 0}
          gotoNext={::this.gotoNextPage}
          gotoPrev={::this.gotoPrevPage} />
      </div>
    )
  }
}


