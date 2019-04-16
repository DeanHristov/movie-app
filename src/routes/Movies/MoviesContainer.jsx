import React, {Component} from 'react'

import './MoviesContainer.scss';
import {connect} from "react-redux";

import { fetchTopRatedMovies } from '@store/actions/movieActions';
import MovieCardItem from "@routes/Movies/ui/MovieCard/MovieCardItem";
import {FormattedMessage} from "react-intl";


@connect(props => ({
  lang: props.intl.locale,
  movies: props.movies.movies
}), dispatch => ({
  fetchMovies: (params) => dispatch(fetchTopRatedMovies(params))
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

  render() {
    const { movies } = this.state;
    return (
      <div className={'movies-container'}>
        <header className={'movies-header'} >
          <FormattedMessage id={'app:movies:page:title'} />
        </header>
        <section className={'movie-view slide-up-in'}>
          {movies.results.map((movie, idx) =>
            <MovieCardItem {...movie} key={`movie-item-${idx}`} />
          )}
        </section>
      </div>
    )
  }
}


