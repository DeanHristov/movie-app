import LocaleLoader from "./LocaleLoader";

export const moviesState = {
  oldMovies: {},
  movies: {},
  oldTVShows: {},
  tvShows: {}
};

export const userState = {
    isLogged: false,

    // TODO Replace it with real API endpoint!
    data: {
      fistName: 'khaled',
      lastName: 'børresen',
      gender: 'male',
      email: 'khaled.børresen@example.com',
      login: {
        uuid: null,
        username: 'demo',
        password: 'demo',
        salt: null,
        sha256: null
      }
    }
};

export const LOCAL_STORAGE = {
  LOCALE: 'app:locale'
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
  {path: '/', title: 'home', isUsage: true},
  {path: '/login', title: 'login', isUsage: false}

];
