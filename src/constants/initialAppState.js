import LocaleLoader from "./LocaleLoader";

export const movieState = {
    movies: [
    ],
    movieModal: {
        isOpen: false
    }
}

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
}

export const LOCAL_STORAGE = {
  LOCALE: 'app:locale'
}

export const settingPanelState = {
  togglePanel: false
}
export const intlState = {
    languages: ['en', 'bg'],
    locale: localStorage.getItem(LOCAL_STORAGE.LOCALE) || 'en',
    messages: LocaleLoader(localStorage.getItem(LOCAL_STORAGE.LOCALE) || 'en')
}

export const initMenuState = {
  toggleMenu: false
}

export const requestState = {
  // In this time the UI have to trigger some kind of state like 'spinner'
  isFetching: false,

  // There should be: 'error' or 'success'
  status: null,

  // Populate it only if the status is 'error'
  error: null,

  // Store timestamp
  lastUpdated: null,

  //
  url: null,

  data: []
};

export const urlRoutes = [
  {path: '/', title: 'home', isUsage: true},
  {path: '/login', title: 'login', isUsage: false},
  {path: '/search', title: 'search', isUsage: true},
  {path: '/:movieId', title: 'movie', isUsage: false},
  {path: '/movies', title: 'movies', isUsage: true},
  {path: '/about', title: 'about', isUsage: true},
];
