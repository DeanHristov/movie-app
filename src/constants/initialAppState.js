import LocaleLoader from "./LocaleLoader";

export const moviesState = {
  oldMovies: {},
  movies: {},
  movieDetails: {}
};

export const credentials = {
    isLogged: false,
    username: 'demo',
    password: 'demo',
    email: 'khaled.børresen@example.com',
};

export const LOCAL_STORAGE = {
  LOCALE: 'app:locale',
  CREDENTIALS_KEY: 'app:credentials'
};

export const intlState = {
    languages: ['en', 'bg'],
    locale: localStorage.getItem(LOCAL_STORAGE.LOCALE) || 'en',
    messages: LocaleLoader(localStorage.getItem(LOCAL_STORAGE.LOCALE) || 'en')
};

export const requestState = {
  // In this time the UI have to trigger some kind of state like 'spinner'
  isFetching: false,

  isFetched: false,

  // There should be: 'error' or 'success'
  status: null,


  // Store timestamp
  lastUpdated: null
};

export const appConfigState = {
  toggleSideBar: false,
  toggleSearchField: false,
  togglePanel: false,
  modalBox: {
    isShow: false,
    type: null
  },
  youtubePlayer: {
    urlKeys: [],
    autoplay: 0
  }
};

export const urlRoutes = [
  {isProtected: true, path: '/movies', exact: true, title: 'movies', isUsage: true},
  {isProtected: true, path: '/movie/:movieId', title: 'details', isUsage: false},
  {isProtected: false, path: '/login', title: 'login', isUsage: false}
];
