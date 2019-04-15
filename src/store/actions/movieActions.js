import {catchRequestError} from '@constants/utils'

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';


export const FETCH_TV_SHOWS_REQUEST = 'FETCH_TV_SHOWS_REQUEST';
export const FETCH_TV_SHOWS_FAILURE = 'FETCH_TV_SHOWS_FAILURE';
export const FETCH_TV_SHOWS_SUCCESS = 'FETCH_TV_SHOWS_SUCCESS';

export const fetchTopRatedMovies = ({lang = 'en', page = 1}) => dispatch => {
  dispatch({type: FETCH_MOVIES_REQUEST});

  // // TODO add catch functionality
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

