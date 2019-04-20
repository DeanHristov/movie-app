import {catchRequestError} from '@constants/utils'

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';

export const SEARCH_TV_ITEM_REQUEST = 'SEARCH_TV_ITEM_REQUEST';
export const SEARCH_TV_ITEM_FAILURE = 'SEARCH_TV_ITEM_FAILURE';
export const SEARCH_TV_ITEM_SUCCESS = 'SEARCH_TV_ITEM_SUCCESS';

export const GET_TV_TRAILER_REQUEST = 'GET_TV_TRAILER_REQUEST';
export const GET_TV_TRAILER_FAILURE = 'GET_TV_TRAILER_FAILURE';
export const GET_TV_TRAILER_SUCCESS = 'GET_TV_TRAILER_SUCCESS';

export const FETCH_TV_SHOWS_REQUEST = 'FETCH_TV_SHOWS_REQUEST';
export const FETCH_TV_SHOWS_FAILURE = 'FETCH_TV_SHOWS_FAILURE';
export const FETCH_TV_SHOWS_SUCCESS = 'FETCH_TV_SHOWS_SUCCESS';

export const GET_MOVIE_BY_ID_REQUEST = 'GET_MOVIE_BY_ID_REQUEST';
export const GET_MOVIE_BY_ID_FAILURE = 'GET_MOVIE_BY_ID_FAILURE';
export const GET_MOVIE_BY_ID_SUCCESS = 'GET_MOVIE_BY_ID_SUCCESS';

export const ON_RESET_MOVIES = 'ON_RESET_MOVIES';

export const fetchTopRatedMovies = ({lang = 'en', page = 1}) => dispatch => {
  dispatch({type: FETCH_MOVIES_REQUEST});


  fetch(`${API_URL}/movie/top_rated?api_key=${API_KEY}&language=${lang}&page=${page}`)
    .then(res => res.json())
    .then(catchRequestError)
    .then(data => dispatch({
      type: FETCH_MOVIES_SUCCESS,
      payload: data
    })).catch(reason => dispatch({
    type: FETCH_MOVIES_FAILURE,
    payload: reason
  }))

};

export const fetchMovieById = ({ movieId, lang }) => dispatch => {
  dispatch({ type: GET_MOVIE_BY_ID_REQUEST });

  fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=${lang}`)
    .then(res => res.json())
    .then(catchRequestError)
    .then(data => dispatch({
      type: GET_MOVIE_BY_ID_SUCCESS,
      payload: data
    })).catch(reason => dispatch({
    type: GET_MOVIE_BY_ID_FAILURE,
    payload: reason
  }))
}


export const fetchPopularTVShows = ({lang = 'en', page = 1}) => dispatch => {
  dispatch({type: FETCH_TV_SHOWS_REQUEST});

  fetch(`${API_URL}/tv/popular?api_key=${API_KEY}&language=${lang}&page=${page}`)
    .then(res => res.json())
    .then(catchRequestError)
    .then(data => dispatch({
      type: FETCH_TV_SHOWS_SUCCESS,
      payload: data
    })).catch(reason => dispatch({
    type: FETCH_TV_SHOWS_FAILURE,
    payload: reason
  }))
};


export const searchTVByQuery = ({lang = 'en', query = null, context = null}) => dispatch => {
  if (!query || !context) return; // We block searching with empty query

  dispatch({type: SEARCH_TV_ITEM_REQUEST});

  fetch(`${API_URL}/search/${context}?api_key=${API_KEY}&language=${lang}&query=${query}`)
    .then(res => res.json())
    .then(catchRequestError)
    .then(data => dispatch({
      type: SEARCH_TV_ITEM_SUCCESS,
      payload: data
    })).catch(reason => dispatch({
    type: SEARCH_TV_ITEM_FAILURE,
    payload: reason
  }))

};

export const getTVTrailer = (props) => dispatch => {
  if (!props.movieId ) return;

  dispatch({type: GET_TV_TRAILER_REQUEST});

  fetch(`${API_URL}/movie/${props.movieId}/videos?api_key=${API_KEY}&language=${props.lang}`)
    .then(res => res.json())
    .then(catchRequestError)
    .then(data => dispatch({
      type: GET_TV_TRAILER_SUCCESS,
      payload: { ...props, results: data.results}
    })).catch(reason => dispatch({
    type: GET_TV_TRAILER_FAILURE,
    payload: reason
  }))
}


